import { ReactElement } from 'react';
import { getFeatureFlag } from '../../lib/FeatureFlags';
import { FeatureFlagKeys } from '../../model/types';

export interface ToggleFeatureComponentProps {
    name: FeatureFlagKeys;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatureComponent = ({
    name,
    on,
    off,
}: ToggleFeatureComponentProps) => {
    if (getFeatureFlag(name)) {
        return on;
    }

    return off;
};
