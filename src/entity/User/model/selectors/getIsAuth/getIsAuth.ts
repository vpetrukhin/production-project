import { StateSchema } from 'app/providers/Redux/types/StateSchema';
export const getIsAuth = (state: StateSchema) => state.user.isAuth;