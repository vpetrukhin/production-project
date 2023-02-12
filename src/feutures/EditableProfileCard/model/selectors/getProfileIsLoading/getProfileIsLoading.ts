import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useProfileIsLoading, getProfileIsLoading] = buildSelector((state: StateSchema) => state?.profile?.isLoading);