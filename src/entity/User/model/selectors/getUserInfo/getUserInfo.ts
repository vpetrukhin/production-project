import { StateSchema } from 'app/providers/Redux';

export const getUserInfo = (state: StateSchema) => state.user.userInfo;