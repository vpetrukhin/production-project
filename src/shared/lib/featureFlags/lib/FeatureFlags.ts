import { FeatureFlags } from '../model/types';

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

export function getFeatureFlags() {
    return feuturesFlags
}