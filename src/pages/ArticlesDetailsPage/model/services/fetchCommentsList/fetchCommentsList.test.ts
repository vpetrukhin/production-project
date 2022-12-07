import { IComment } from '@/entity/Comment';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchCommentsList } from './fetchCommentsLIst';

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

describe('tests for fetchCommentsList.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsList);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: mockComments }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual(mockComments);
    });
    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsList);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});