import { Rating } from '@/entity/Rating';
import { rtkApi } from '@/shared/api/rtkAPi';

interface GetAticleRatingProps {
    userId: string;
    articleId: string;
}

interface RateArticleProps {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const ArticleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetAticleRatingProps>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    articleId,
                    userId
                }
            }),
        }),
        rateArticle: build.mutation<Rating[], RateArticleProps>({
            query: ({ articleId, userId, rate, feedback }) => ({
                url: '/article-ratings',
                method: 'POST',
                body: {
                    articleId,
                    userId,
                    rate,
                    feedback,
                }
            }),
        })
    }),
    overrideExisting: false,
});

export const { useGetArticleRatingQuery, useRateArticleMutation } = ArticleRatingApi;