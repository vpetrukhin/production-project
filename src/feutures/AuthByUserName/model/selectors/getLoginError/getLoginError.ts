import { StateSchema } from 'app/providers/Redux';

export const getLoginError = (state: StateSchema) => state.login?.error || undefined;