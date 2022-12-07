import { StateSchema } from '@/app/providers/Redux';
export const getLoginIsLoading = (state: StateSchema): boolean => state.login?.isLoading || false;