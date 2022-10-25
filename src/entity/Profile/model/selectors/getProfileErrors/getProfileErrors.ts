import { StateSchema } from 'app/providers/Redux';

export const getProfileErrors = (state: StateSchema) => state?.profile?.errors;