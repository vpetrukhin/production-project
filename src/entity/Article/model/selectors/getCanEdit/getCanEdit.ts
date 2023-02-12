import { createSelector } from '@reduxjs/toolkit';
import { getUserInfo } from '@/entity/User';
import { getArticleData } from '../getArticle/getArticle';
import { buildSelector } from '@/shared/lib/store';

export const [useCanEdit, getCanEdit] = buildSelector(createSelector(
    getArticleData,
    getUserInfo,
    (articleData, userInfo) => articleData?.user.id === userInfo?.id
));