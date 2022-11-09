import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entity/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;

    view: ArticleView;
}