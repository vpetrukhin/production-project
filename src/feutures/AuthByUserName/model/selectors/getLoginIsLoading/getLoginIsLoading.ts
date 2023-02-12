import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useLoginIsLoading, getLoginIsLoading] = buildSelector((state: StateSchema): boolean => state.login?.isLoading || false);