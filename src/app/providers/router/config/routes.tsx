import { UserRoles } from '@/entity/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsEditPage } from '@/pages/ArticleDetailsEditPage';
import { ArticlesDetailsCreatePage } from '@/pages/ArticlesDetailsCreatePage';
import { ArticlesDetailsPage } from '@/pages/ArticlesDetailsPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import { SettingsPage } from '@/pages/SettingsPage';
import {
    getAboutPath,
    getAdminPanelPath,
    getArticleCreatePath,
    getArticleDetailsPath,
    getArticleEditPath,
    getArticlesPath,
    getForbiddenPath,
    getMainPath,
    getProfilePath,
    getRegistrationPath,
    getSettingsPath,
    Routes,
} from '@/shared/config/const/router';
import { IRoute } from '@/shared/types/router';

export const routesConfig: Record<Routes, IRoute> = {
    [Routes.MAIN]: {
        path: getMainPath(),
        element: <MainPage />,
        onlyAuthorized: false,
    },
    [Routes.SETTINGS]: {
        path: getSettingsPath(),
        element: <SettingsPage />,
        onlyAuthorized: false,
    },
    [Routes.ABOUT]: {
        path: getAboutPath(),
        element: <AboutPage />,
        onlyAuthorized: false,
    },
    [Routes.PROFILE]: {
        path: getProfilePath(':id'),
        element: <ProfilePage />,
        onlyAuthorized: true,
    },
    [Routes.ARTICLES]: {
        path: getArticlesPath(),
        element: <ArticlesPage />,
        onlyAuthorized: true,
    },
    [Routes.ARTICLEDETAILS]: {
        path: getArticleDetailsPath(':id'),
        element: <ArticlesDetailsPage />,
        onlyAuthorized: true,
    },
    [Routes.ARTICLECREATE]: {
        path: getArticleCreatePath(),
        element: <ArticlesDetailsCreatePage />,
        onlyAuthorized: true,
    },
    [Routes.ARTICLEEDIT]: {
        path: getArticleEditPath(':id'),
        element: <ArticleDetailsEditPage />,
        onlyAuthorized: true,
    },
    [Routes.ADMINPANEL]: {
        path: getAdminPanelPath(),
        element: <AdminPanelPage />,
        onlyAuthorized: true,
        roles: [UserRoles.ADMIN, UserRoles.MANAGER],
    },
    [Routes.REGISTRATION]: {
        path: getRegistrationPath(),
        element: <RegistrationPage />,
        onlyAuthorized: false,
    },
    [Routes.FORBIDDEN]: {
        path: getForbiddenPath(),
        element: <ForbiddenPage />,
        onlyAuthorized: true,
    },
    [Routes.NOTFOUND]: {
        path: '*',
        element: <NotFoundPage />,
        onlyAuthorized: false,
    },
};
