import { StateSchema } from 'app/providers/Redux';

export const getProfileForm = (state: StateSchema) => state?.profile?.form;