import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useProfileReadonly, getProfileReadonly] = buildSelector((state: StateSchema) => state?.profile?.readonly);