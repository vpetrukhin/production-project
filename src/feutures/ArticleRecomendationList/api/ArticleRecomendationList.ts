import { rtkApi } from 'shared/api/rtkAPi';

const ArticleRecomendationListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecomendationList: build.query({
            query: (limit) => ({
                url: 'articles',
                params: {
                    _limit: limit
                }
            }),
        })
    }),
    overrideExisting: false,
});

export const { useGetArticleRecomendationListQuery } = ArticleRecomendationListApi;