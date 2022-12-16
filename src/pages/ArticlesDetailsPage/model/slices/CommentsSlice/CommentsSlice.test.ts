import { IComment } from '@/entity/Comment';
import { fetchCommentsList } from '../../services/fetchCommentsList/fetchCommentsLIst';
import { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';
import { CommentsReducer } from './CommentsSlice';

const mockComments: IComment[] = [
    {
        id: '1',
        text: 'comment',
        user: {
            id: '1',
            username: 'user',
            avatar: ''
        }
    }
];

describe('tests for CommentsSlice', () => {
    test('test for fetchCommentsList.pending', () => {
        expect(CommentsReducer(
            {} as ArticleDetailsCommentsSchema,
            fetchCommentsList.pending
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });
    test('test for fetchCommentsList.fulfilled', () => {
        expect(CommentsReducer(
            {} as ArticleDetailsCommentsSchema,
            fetchCommentsList.fulfilled(mockComments, '', '')
        )).toEqual({
            isLoading: false,
            ids: ['1'],
            entities: {
                '1': {
                    id: '1',
                    text: 'comment',
                    user: {
                        id: '1',
                        username: 'user',
                        avatar: ''
                    }
                }
            }
        });
    });
});