import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortTypes, ArticleType, ArticleView } from 'entity/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;

    // pagination parameters
    page: number;
    limit: number;
    has: boolean;

    // filters parameters
    sort: ArticleSortTypes;
    order: 'asc' | 'desc';
    view: ArticleView;
    search: string;
    type?: ArticleType;

    _inited: boolean;
}