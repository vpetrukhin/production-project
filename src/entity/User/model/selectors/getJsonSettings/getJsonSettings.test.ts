import { StateSchema } from '@/app/providers/Redux';
import { Theme } from '@/shared/config/const/theme';
import { getJsonSettings } from './getJsonSettings';

describe('tests for getJsonSettings', () => {
    test('default', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                userInfo: {
                    id: '1',
                    username: 'admin',
                    jsonSettings: {
                        theme: Theme.LIGHT,
                    },
                },
            },
        };

        expect(getJsonSettings(state as StateSchema)).toEqual({
            theme: Theme.LIGHT,
        });
    });
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
        };

        expect(getJsonSettings(state as StateSchema)).toBe(undefined);
    });
});
