import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const routesPaths: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about',
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
};