import { CounterSchema } from '../../types/CounterSchema';
import { CounterActions, counterReducer } from './CounterSlice';

describe('tests for CounterSlice', () => {
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, CounterActions.increment)).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, CounterActions.decrement)).toEqual({ value: 9 });
    });
});