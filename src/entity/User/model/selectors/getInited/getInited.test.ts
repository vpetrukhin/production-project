import { StateSchema } from '@/app/providers/Redux';
import { getInited } from './getInited';

describe('tests for getInited.test', () => {
    test('default', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: true
            }
        };

        expect(getInited(state as StateSchema)).toBe(true);
    });
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            user: {}
        };

        expect(getInited(state as StateSchema)).toBe(undefined);
    });
});