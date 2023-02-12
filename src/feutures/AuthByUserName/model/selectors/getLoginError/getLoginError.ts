import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useLoginError, getLoginError] = buildSelector((state: StateSchema) => state.login?.error || undefined);