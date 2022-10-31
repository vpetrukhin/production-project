import { AboutPage } from 'pages/AboutPage';
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
        path: routesPaths.profile,
        element: <ProfilePage />,
        onlyAuthorized: true
    },
    [Routes.NOTFOUND]: {
        path: routesPaths.notfound,
        element: <NotFoundPage />,
        onlyAuthorized: false
    },
};