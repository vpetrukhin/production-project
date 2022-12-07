import { Article } from '@/entity/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsRecomenationSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;
}