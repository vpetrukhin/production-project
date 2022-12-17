// eslint-disable-next-line carav-plugin/layer-imports
import { UserRoles } from '@/entity/User';
import { RouteProps } from 'react-router-dom';

export interface IRoute extends Omit<RouteProps, 'element'> {
    onlyAuthorized: boolean;
    element: JSX.Element
    roles?: UserRoles[];
}
