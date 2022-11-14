import { StateSchema } from 'app/providers/Redux';
import { getAddCommentFormText } from './getAddCommentFormText';

describe('tests for getAddCommentFormText.test', () => {
    test('default', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentFrom: {
                text: 'text'
            }
        };

        expect(getAddCommentFormText(state as StateSchema)).toBe('text');
    });
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentFrom: {}
        };

        expect(getAddCommentFormText(state as StateSchema)).toBe(undefined);
    });
});