import { ArticleBody } from './../model/types/article';
import { $api } from '@/shared/api/API';
import { AxiosResponse } from 'axios';
import { Article } from '../model/types/article';

/**
 * Запрос на обновление статьи
 * @param id id статьи
 * @param newArticle
 */
export const updateArticle = (id: string, newArticle: Partial<ArticleBody>): Promise<AxiosResponse<Article>> => {
    return $api.patch('/articles/' + id, newArticle);
}