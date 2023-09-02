import { rtkApi } from '@/shared/api/rtkAPi';
import { FeatureFlags } from '../model/types';

interface UpdateFeatureFlagsArgs {
    userId: string
    featuresFlags: Partial<FeatureFlags>
}

const FeatureFlagsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsArgs >({
            query: ({ userId, featuresFlags }) => ({
                url: `users/${userId}`,
                method: 'PATCH',
                body: {
                    featuresFlags,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const UpdateFeatureFlags = FeatureFlagsApi.endpoints.updateFeatureFlags.initiate;
