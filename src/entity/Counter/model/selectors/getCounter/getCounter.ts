import { StateSchema } from 'app/providers/Redux';

export const getCounter = (state: Partial<StateSchema>) => state.counter;