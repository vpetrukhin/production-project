import { StateSchema } from 'app/providers/Redux';

export const getProfileReadonly = (state: StateSchema) => state?.profile?.readonly;