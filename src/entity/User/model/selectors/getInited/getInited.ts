import { StateSchema } from '@/app/providers/Redux';

export const getInited = (state: StateSchema) => state.user._inited;