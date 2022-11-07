export interface User {
    id: string;
    username: string;
    avatar: string;
}

export interface UserSchema {
    isAuth: boolean;
    userInfo?: User

    _inited: boolean;
}