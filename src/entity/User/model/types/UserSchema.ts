import { UserRoles } from '../const/userConsts';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRoles[];
}

export interface UserSchema {
    isAuth: boolean;
    userInfo?: User

    _inited: boolean;
}