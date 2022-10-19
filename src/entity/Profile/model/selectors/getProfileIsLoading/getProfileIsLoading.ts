import { StateSchema } from 'app/providers/Redux';

export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading;