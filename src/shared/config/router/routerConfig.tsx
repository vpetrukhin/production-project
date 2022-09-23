import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = 'notfound'
}

export const routesPaths: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about',
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
    [Routes.NOTFOUND]: {
        path: routesPaths.notfound,
        element: <NotFoundPage />
    },
};