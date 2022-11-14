import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/Redux';

export const getScrollStorageScroll = (state: StateSchema) => state.scrollStorage.scroll;
export const getScrollStorageScrollByPath = createSelector(
    getScrollStorageScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
);