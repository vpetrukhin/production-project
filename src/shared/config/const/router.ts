export enum Routes {
    MAIN = 'main',
    SETTINGS = 'settings',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLEDETAILS = 'articles_details',
    ARTICLECREATE = 'articles_create',
    ARTICLEEDIT = 'articles_edit',
    ADMINPANEL = 'admin',
    REGISTRATION = 'sign_up',

    // last
    NOTFOUND = 'notfound',
    FORBIDDEN = 'forbidden'
}

export const getMainPath = () => '/';
export const getSettingsPath = () => '/settings';
export const getAboutPath = () => '/about';
export const getProfilePath = (id: string) => `/profile/${id}`;
export const getArticlesPath = () => '/articles';
export const getArticleDetailsPath = (id: string) => `/article/${id}`;
export const getArticleCreatePath = () => '/article/create';
export const getArticleEditPath = (id: string) => `/article/${id}/edit`;
export const getAdminPanelPath = () => '/article/admin';
export const getForbiddenPath = () => '/forbidden';
export const getRegistrationPath = () => '/sign_up';


export const AppRouteByPathPattern: Record<string, Routes> = {
    [getMainPath()]: Routes.MAIN,
    [getSettingsPath()]: Routes.SETTINGS,
    [getAboutPath()]: Routes.ABOUT,
    [getProfilePath(':id')]: Routes.PROFILE,
    [getArticlesPath()]: Routes.ARTICLES,
    [getArticleDetailsPath(':id')]: Routes.ARTICLEDETAILS,
    [getArticleCreatePath()]: Routes.ARTICLECREATE,
    [getArticleEditPath(':id')]: Routes.ARTICLEEDIT,
    [getAdminPanelPath()]: Routes.ADMINPANEL,
    [getForbiddenPath()]: Routes.FORBIDDEN,
    [getRegistrationPath()]: Routes.REGISTRATION
}