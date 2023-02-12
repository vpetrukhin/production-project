import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useProfileForm, getProfileForm] = buildSelector((state: StateSchema) => state?.profile?.form);