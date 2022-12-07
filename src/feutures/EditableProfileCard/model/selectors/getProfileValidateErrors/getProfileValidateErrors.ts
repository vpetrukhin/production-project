import { StateSchema } from '@/app/providers/Redux';

export const getProfileValidateError = (state: StateSchema) => state?.profile?.validateErrors;