import { StateSchema } from 'app/providers/Redux';

export const getCounter = (state: StateSchema) => state.counter;