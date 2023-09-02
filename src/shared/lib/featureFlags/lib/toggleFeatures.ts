import { getFeatureFlag } from './FeatureFlags';
import { FeatureFlags } from '../model/types';

interface ToggleFeatureOptions<T> {
    name: keyof FeatureFlags
    on: () => T;
    off: () => T;
}

export function toggleFeature<T>({ name, off, on }: ToggleFeatureOptions<T>) {
    if (getFeatureFlag(name)) {
        return on()
    }

    return off()
}
