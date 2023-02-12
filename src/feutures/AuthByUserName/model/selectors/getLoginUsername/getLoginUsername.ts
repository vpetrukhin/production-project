import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useLoginUsername, getLoginUsername] = buildSelector((state: StateSchema) => state.login?.username || '');