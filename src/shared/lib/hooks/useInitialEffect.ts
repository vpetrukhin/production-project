import { DependencyList, useEffect } from 'react';

export const useInitialEffect = (callback: () => void, dependencies?: DependencyList) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback();
        }
        // eslint-disable-next-line
    }, dependencies);
};