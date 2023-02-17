import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useRegForm, getRegForm] = buildSelector((state: StateSchema) => state.reg?.form);
export const [useRegErrors, getRegErrors] = buildSelector((state: StateSchema) => state.reg?.errors || []);