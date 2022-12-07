import { StateSchema } from '@/app/providers/Redux';

export const getProfileData = (state: StateSchema) => state?.profile?.data;