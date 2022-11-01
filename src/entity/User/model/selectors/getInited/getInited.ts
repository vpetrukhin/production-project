import { StateSchema } from 'app/providers/Redux/types/StateSchema';
export const getInited = (state: StateSchema) => state.user._inited;