import { Rating } from '@/entity/Rating';
import { rtkApi } from '@/shared/api/rtkAPi';

interface GetProfileRatingProps {
    profileId: string;
    userId: string
}

interface RateProfileProps {
    rate: number;
    profileId: string;
    userId: string;
    feedback?: string;
}

const ProfileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetProfileRatingProps>({
            query: ({ profileId, userId }) => ({
                url: '/profile-ratings',
                params: {
                    profileId,
                    userId
                }
            }),
        }),
        rateProfile: build.mutation<Rating[], RateProfileProps>({
            query: ({ profileId, userId, rate, feedback }) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: {
                    profileId,
                    userId,
                    rate,
                    feedback,
                }
            }),
        })
    }),
    overrideExisting: false,
});

export const { useGetProfileRatingQuery, useRateProfileMutation } = ProfileRatingApi;