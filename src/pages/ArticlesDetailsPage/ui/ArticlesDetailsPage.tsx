import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleDetails } from 'entity/Article';
import { CommentList } from 'entity/Comment';
import { AddCommentForm } from 'feutures/addComment';
import { Page } from 'widgets/Page/Page';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule } from 'shared/lib/DynamicModule/DynamicModule';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getArticleDetailsCommentsLoading } from '../model/selectors/comments';
import { CommentsReducer, getAllComments } from '../model/slices/CommentsSlice/CommentsSlice';
import { fetchCommentsList } from '../model/services/fetchCommentsList/fetchCommentsLIst';
import { addArticleComment } from '../model/services/addArticleComment/addArticleComment';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const comments = useSelector(getAllComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsList(id));
    });

    const onSendComment = (value: string) => {
        dispatch(addArticleComment(value));
    };

    return (
        <DynamicModule reducers={{
            articleDetailsComments: CommentsReducer
        }}>
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <ArticleDetails articleId={id || ''} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </Page>
        </DynamicModule>
    );
};

export default memo(ArticlesDetailsPage);