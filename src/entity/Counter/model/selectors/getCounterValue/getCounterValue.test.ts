import { StateSchema } from 'app/providers/Redux';
import { getCounterValue } from './getCounterValue';

describe('tests for getCounterValue', () => {
    test('test', () => {
        const state: StateSchema = {
            counter: { value: 10 }
        };
        expect(getCounterValue(state)).toBe(10);
    });
});