import { StateSchema } from '@/app/providers/Redux';

export const getIsAuth = (state: StateSchema) => state.user.isAuth;