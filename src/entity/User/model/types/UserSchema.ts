export interface User {
    id: string;
    username: string;
}

export interface UserSchema {
    isAuth: boolean;
    userInfo?: User

    _inited: boolean;
}