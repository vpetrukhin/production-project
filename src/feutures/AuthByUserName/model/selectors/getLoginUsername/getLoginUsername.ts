import { StateSchema } from '@/app/providers/Redux';

export const getLoginUsername = (state: StateSchema) => state.login?.username || '';