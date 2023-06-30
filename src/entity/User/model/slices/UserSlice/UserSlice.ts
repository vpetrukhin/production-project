import { PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../../types/UserSchema';
import { buildSlice } from '@/shared/lib/store';
import { setFeatureFlags } from '@/shared/lib/featureFlags';
import { initAuthData } from '../../services/initAuthData';
import { USER_LOCALSTORAGE_KEY } from '@/shared/config/const/localStorage';
import { saveJsonSettings } from '../../services/saveJsonSettings';
import { JsonSettings } from '../../types/JsonSettings';

const initialState: UserSchema = {
    isAuth: false,
    _inited: false,
};

export const UserSlice = buildSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(action.payload.id),
            );
            state.isAuth = true;
            state.userInfo = action.payload;
            if (state.userInfo?.featuresFlags) {
                setFeatureFlags(state.userInfo?.featuresFlags);
            }
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.isAuth = false;
            state.userInfo = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            initAuthData.fulfilled,
            (state, { payload }: PayloadAction<User>) => {
                state.userInfo = payload;
                if (payload.featuresFlags) {
                    setFeatureFlags(payload.featuresFlags);
                }
                state.isAuth = Boolean(payload);

                state._inited = true;
            },
        );
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.userInfo) {
                    state.userInfo.jsonSettings = payload;
                }
            },
        );
    },
});

export const {
    actions: UserActions,
    reducer: UserReducer,
    useActions: useUserAction,
} = UserSlice;
