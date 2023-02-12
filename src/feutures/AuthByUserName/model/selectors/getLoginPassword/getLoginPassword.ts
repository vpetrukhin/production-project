import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useLoginPassword, getLoginPassword] = buildSelector((state: StateSchema) => state.login?.password || '');