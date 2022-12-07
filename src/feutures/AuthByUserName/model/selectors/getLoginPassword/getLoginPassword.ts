import { StateSchema } from '@/app/providers/Redux';
export const getLoginPassword = (state: StateSchema) => state.login?.password || '';