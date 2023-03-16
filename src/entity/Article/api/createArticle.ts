import { $api } from '@/shared/api/API'
import { AxiosResponse } from 'axios';
import { Article, ArticleBody } from '../model/types/article'

export const createArticle = (newArticle: ArticleBody): Promise<AxiosResponse<Article>> => {
    return $api.post('articles', newArticle);
}