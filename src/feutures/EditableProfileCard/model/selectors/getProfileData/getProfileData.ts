import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useProfileData, getProfileData] = buildSelector((state: StateSchema) => state?.profile?.data);