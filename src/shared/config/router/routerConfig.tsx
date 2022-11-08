import { AboutPage } from 'pages/AboutPage';
import { ArticlesDetailsPage } from 'pages/ArticlesDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export interface IRoute extends Omit<RouteProps, 'element'> {
    onlyAuthorized: boolean;
    element: JSX.Element
}

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLESDETAILS = 'articles_details',

    // last
    NOTFOUND = 'notfound'
}

export const routesPaths: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about',
    [Routes.PROFILE]: '/profile/', // + id
    [Routes.ARTICLES]: '/articles',
    [Routes.ARTICLESDETAILS]: '/articles/', // + id

    // last
    [Routes.NOTFOUND]: '*'
};

export const routesConfig: Record<Routes, IRoute> = {
    [Routes.MAIN]: {
        path: routesPaths.main,
        element: <MainPage />,
        onlyAuthorized: false
    },
    [Routes.ABOUT]: {
        path: routesPaths.about,
        element: <AboutPage />,
        onlyAuthorized: false
    },
    [Routes.PROFILE]: {
        path: routesPaths.profile + ':id' ,
        element: <ProfilePage />,
        onlyAuthorized: true
    },
    [Routes.ARTICLES]: {
        path: routesPaths.articles,
        element: <ArticlesPage />,
        onlyAuthorized: true
    },
    [Routes.ARTICLESDETAILS]: {
        path: routesPaths.articles_details + ':id',
        element: <ArticlesDetailsPage />,
        onlyAuthorized: true
    },
    [Routes.NOTFOUND]: {
        path: routesPaths.notfound,
        element: <NotFoundPage />,
        onlyAuthorized: false
    },
};