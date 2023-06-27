/**
 * Селекторы
 */
export { getIsAuth } from './model/selectors/getIsAuth/getIsAuth';
export { getInited } from './model/selectors/getInited/getInited';
export {
    getUserInfo,
    useUserInfo,
} from './model/selectors/getUserInfo/getUserInfo';
export { getUser } from './model/selectors/getUser/getUser';
export {
    getIsAdmin,
    getIsManager,
    getUserRoles,
} from './model/selectors/roles/roles';
/**
 * Сервисы
 */
export { initAuthData } from './model/services/initAuthData';
/**
 * Slice
 */
export { UserReducer, UserActions } from './model/slices/UserSlice/UserSlice';
/**
 * Типы
 */
export type { UserSchema, User } from './model/types/UserSchema';
/**
 * Константы
 */
export { UserRoles } from './model/const/userConsts';
