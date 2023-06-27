import { FeatureFlags } from './types';

let feuturesFlags: FeatureFlags = {};

export function setFeatureFlags(featuresFlags: FeatureFlags) {
    feuturesFlags = featuresFlags
}

export function getFeatureFlag(featuresFlag: keyof FeatureFlags) {
    if (!feuturesFlags[featuresFlag]) {
        return false
    }

    return feuturesFlags[featuresFlag];
}