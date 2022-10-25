import { StateSchema } from 'app/providers/Redux';

export const getProfileError = (state: StateSchema) => state?.profile?.error;