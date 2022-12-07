import { StateSchema } from '@/app/providers/Redux';
import { getScrollStorageScrollByPath } from './scrollStorage';

describe('tests for scrollStorage', () => {
    test('test for getScrollStorageScrollByPath', () => {
        const state: DeepPartial<StateSchema> = {
            scrollStorage: {
                scroll: {
                    'path': 100
                }
            }
        };

        expect(getScrollStorageScrollByPath(state as StateSchema, 'path'));
    });
});