import { useSelector } from 'react-redux';
import { AddCommentForm } from '@/feutures/addComment';
import { CommentList } from '@/entity/Comment';
import { VStack } from '@/shared/ui/Stack';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { getArticleDetailsCommentsLoading } from '../../model/selectors/comments/comments';
import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment';
import { fetchCommentsList } from '../../model/services/fetchCommentsList/fetchCommentsLIst';
import { CommentsReducer, getAllComments } from '../../model/slices/CommentsSlice/CommentsSlice';



interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string
}

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;

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
            articleDetailsComments: CommentsReducer,
        }}>
            <VStack max gap='16' className={className}>
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </VStack>
        </DynamicModule>
    );
};