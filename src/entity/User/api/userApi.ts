import { rtkApi } from '@/shared/api/rtkAPi';
import { JsonSettings } from '../model/types/JsonSettings';
import { User } from '../model/types/UserSchema';

interface GetUserInfoArgs {
    userId: string;
}

interface GetJsonSettingsArgs {
    userId: string;
    jsonSettings: JsonSettings;
}

const UserApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserInfo: build.query<User, GetUserInfoArgs>({
            query: ({ userId }) => ({
                url: `users/${userId}`,
            }),
        }),
        setJsonSettings: build.mutation<User, GetJsonSettingsArgs>({
            query: ({ userId, jsonSettings }) => ({
                url: `users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const getUserInfoRequest = UserApi.endpoints.getUserInfo.initiate;
export const setJsonSettings = UserApi.endpoints.setJsonSettings.initiate;
