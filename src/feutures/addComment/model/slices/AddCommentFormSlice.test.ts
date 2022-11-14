import { AddCommentFormActions, AddCommentFormReducer } from './AddCommentFormSlice';

describe('tests for AddCommentFormSlice.test', () => {
    test('test setText', () => {
        expect(AddCommentFormReducer(
            {},
            AddCommentFormActions.setText('text')
        )).toEqual({
            text: 'text'
        });
    });
});