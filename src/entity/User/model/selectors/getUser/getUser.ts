import { StateSchema } from '@/app/providers/Redux';
export const getUser = (state: StateSchema) => state?.user;