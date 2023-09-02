import { ThunkConfig } from '@/app/providers/Redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UpdateFeatureFlags } from '../api/featureFlagsApi';
import { getFeatureFlags } from '../lib/FeatureFlags';
import { FeatureFlags } from '../model/types';

interface UpdateFeatureFlagsArgs {
    userId: string
    newFeatureFlags: FeatureFlags
}

export const updateFeatureFlags = createAsyncThunk<void, UpdateFeatureFlagsArgs, ThunkConfig<string>>(
    'featureFlags/updateFeatureFlags',
    async ({ userId, newFeatureFlags }, thunkAPI) => {
        const { dispatch } = thunkAPI;

        try {
            await dispatch(UpdateFeatureFlags({
                userId,
                featuresFlags: {
                    ...getFeatureFlags(),
                    ...newFeatureFlags
                }
            }))

            window.location.reload()
        } catch (e) {
            console.log(e)
        }
    }
);