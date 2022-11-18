import { createSelector } from '@reduxjs/toolkit';
import { getUserInfo } from 'entity/User';
import { getArticleData } from '../getArticle';

export const getCanEdit = createSelector(
    getArticleData,
    getUserInfo,
    (articleData, userInfo) => articleData?.user.id === userInfo?.id
);