import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',

    // last
    NOTFOUND = 'notfound'
}

export const routesPaths: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about',
    [Routes.PROFILE]: '/profile',

    // last
    [Routes.NOTFOUND]: '*'
};

export const routesConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: routesPaths.main,
        element: <MainPage />
    },
    [Routes.ABOUT]: {
        path: routesPaths.about,
        element: <AboutPage />
    },
    [Routes.PROFILE]: {
        path: routesPaths.profile,
        element: <ProfilePage />
    },
    [Routes.NOTFOUND]: {
        path: routesPaths.notfound,
        element: <NotFoundPage />
    },
};