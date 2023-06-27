import { rtkApi } from '@/shared/api/rtkAPi';
import { User } from '../model/types/UserSchema';

interface GetUserInfoArgs {
    userId: string;
}

const UserApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserInfo: build.query<User, GetUserInfoArgs>({
            query: ({ userId }) => ({
                url: `users/${userId}`,
            }),
        }),
    }),
    overrideExisting: false,
});

export const getUserInfoRequest = UserApi.endpoints.getUserInfo.initiate;
