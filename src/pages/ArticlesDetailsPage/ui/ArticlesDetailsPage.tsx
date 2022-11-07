import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entity/Article';
import { CommentList } from 'entity/Comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule } from 'shared/lib/DynamicModule/DynamicModule';
import { CommentsReducer, getAllComments } from '../model/slices/CommentsSlice/CommentsSlice';
import cls from './ArticlesDetailsPage.module.scss';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsLoading } from '../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchCommentsList } from '../model/services/fetchCommentsLIst';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const {t} = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const comments = useSelector(getAllComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsList(id));
    });

    return (
        <DynamicModule reducers={{
            articleDetailsComments: CommentsReducer
        }}>
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <ArticleDetails articleId={id || ''} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
                {/* <CommentList comments={[
                    {
                        id: '1',
                        text: 'comment1',
                        user: { id: '1', username: 'name', avatar: 'https://images.unsplash.com/photo-1665856314098-4aa9ff7a3d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' }
                    },
                    {
                        id: '2',
                        text: 'comment2',
                        user: { id: '1', username: 'name', avatar: 'https://images.unsplash.com/photo-1665856314098-4aa9ff7a3d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' }
                    }
                ]} /> */}
            </div>
        </DynamicModule>
    );
};

export default memo(ArticlesDetailsPage);