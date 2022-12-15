import { Routes } from '@/shared/types/router';

export const routesPaths: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about',
    [Routes.PROFILE]: '/profile/', // + id
    [Routes.ARTICLES]: '/articles',
    [Routes.ARTICLESDETAILS]: '/article/', // + id
    [Routes.ARTICLESCREATE]: '/article/create',
    [Routes.ARTICLESEDIT]: '/article/:id/edit',
    [Routes.ADMINPANEL]: '/admin',

    [Routes.FORBIDDEN]: '/forbidden',
    // last
    [Routes.NOTFOUND]: '*',
};