import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleDetails, ArticleList } from 'entity/Article';
import { CommentList } from 'entity/Comment';
import { AddCommentForm } from 'feutures/addComment';
import { Page } from 'widgets/Page/Page';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule } from 'shared/lib/DynamicModule/DynamicModule';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getArticleDetailsCommentsLoading } from '../model/selectors/comments/comments';
import { CommentsReducer, getAllComments } from '../model/slices/CommentsSlice/CommentsSlice';
import { fetchCommentsList } from '../model/services/fetchCommentsList/fetchCommentsLIst';
import { addArticleComment } from '../model/services/addArticleComment/addArticleComment';
import cls from './ArticlesDetailsPage.module.scss';
import { getAllRecomendation, RecomendationReducer } from '../model/slices/RecomendationSlice/RecomendationSlice';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { fetchRecomendationList } from '../model/services/fetchRecomendationList/fetchRecomendationList';
import { getArticleDetailsRecomendationsLoading } from '../model/selectors/recomendations/recomendation';
import { ArticleDetailsHeader } from './ArticleDetailsHeader/ArticleDetailsHeader';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const {t} = useTranslation('article');

    const dispatch = useAppDispatch();
    const comments = useSelector(getAllComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsLoading);
    const recommendations = useSelector(getAllRecomendation.selectAll);
    const recommendationsIsLoading = useSelector(getArticleDetailsRecomendationsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsList(id));
        dispatch(fetchRecomendationList());
    });

    const onSendComment = (value: string) => {
        dispatch(addArticleComment(value));
    };

    return (
        <DynamicModule reducers={{
            articleDetailsComments: CommentsReducer,
            articleDetailsRecomendation: RecomendationReducer
        }}>
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <ArticleDetailsHeader id={id} />
                <ArticleDetails articleId={id || ''} />
                <Text title={t('rekomendacii')} />
                <ArticleList 
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendation}
                    target={'_blank'}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </Page>
        </DynamicModule>
    );
};

export default memo(ArticlesDetailsPage);