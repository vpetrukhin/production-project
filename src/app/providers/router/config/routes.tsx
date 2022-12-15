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
import { routesPaths } from '@/shared/config/const/router';
import { Routes, IRoute } from '@/shared/types/router';

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
    [Routes.ARTICLESCREATE]: {
        path: routesPaths.articles_create,
        element: <ArticlesDetailsCreatePage />,
        onlyAuthorized: true
    },
    [Routes.ARTICLESEDIT]: {
        path: routesPaths.articles_edit,
        element: <ArticleDetailsEditPage />,
        onlyAuthorized: true
    },
    [Routes.ADMINPANEL]: {
        path: routesPaths.admin,
        element: <AdminPanelPage />,
        onlyAuthorized: true,
        roles: [UserRoles.ADMIN, UserRoles.MANAGER]
    },
    [Routes.FORBIDDEN]: {
        path: routesPaths.forbidden,
        element: <ForbiddenPage />,
        onlyAuthorized: true,
    },
    [Routes.NOTFOUND]: {
        path: routesPaths.notfound,
        element: <NotFoundPage />,
        onlyAuthorized: false
    },
};