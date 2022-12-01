import { StateSchema } from 'app/providers/Redux';
import { UserRoles } from '../../types/UserSchema';
import { getIsAdmin, getIsManager, getUserRoles } from './roles';

describe('tests for roles.test', () => {
    test('test for getUserRoles', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                userInfo: {
                    roles: [UserRoles.ADMIN, UserRoles.USER]
                }
            }
        };

        expect(getUserRoles(state as StateSchema)).toEqual([UserRoles.ADMIN, UserRoles.USER]);
    });
    test('test for getIsAdmin', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                userInfo: {
                    roles: [UserRoles.USER]
                }
            }
        };

        expect(getIsAdmin(state as StateSchema)).toBe(false);
    });
    test('test for getIsManager', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                userInfo: {
                    roles: [UserRoles.USER]
                }
            }
        };

        expect(getIsManager(state as StateSchema)).toBe(false);
    });
});