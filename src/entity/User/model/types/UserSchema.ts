export interface User {
    id: string;
    username: string;
}

export interface UserSchema {
    authKey?: string;
    userInfo?: User

    _inited: boolean;
}