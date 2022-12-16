// eslint-disable-next-line carav-plugin/layer-imports
import { UserRoles } from '@/entity/User';
import { RouteProps } from 'react-router-dom';

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLESDETAILS = 'articles_details',
    ARTICLESCREATE = 'articles_create',
    ARTICLESEDIT = 'articles_edit',
    ADMINPANEL = 'admin',

    // last
    NOTFOUND = 'notfound',
    FORBIDDEN = 'forbidden'
}

export interface IRoute extends Omit<RouteProps, 'element'> {
    onlyAuthorized: boolean;
    element: JSX.Element
    roles?: UserRoles[];
}
