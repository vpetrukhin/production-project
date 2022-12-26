import { StateSchema } from '@/app/providers/Redux';
import { useSelector } from 'react-redux';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>]

export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorHook = () => useSelector(selector);

    return [useSelectorHook, selector];
}