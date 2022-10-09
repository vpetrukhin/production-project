import { StateSchema } from 'app/providers/Redux';
import { getCounter } from './getCounter';

describe('tests for getCounter', () => {
    test('test', () => {
        const state: StateSchema = {
            counter: { value: 10 }
        };
        expect(getCounter(state)).toEqual({ value: 10 });
    });
});