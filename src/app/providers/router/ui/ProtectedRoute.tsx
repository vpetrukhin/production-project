import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsAuth } from '@/entity/User/model/selectors/getIsAuth/getIsAuth';
import { getUserRoles, UserRoles } from '@/entity/User';
import { routesPaths } from '@/shared/config/router/routerConfig';
import { useMemo } from 'react';

interface ProtectedRouteProps {
    children: JSX.Element,
    roles?: UserRoles[]
}

export const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
    const userRoles = useSelector(getUserRoles);
    const isAuth = useSelector(getIsAuth);
    const location = useLocation();


    const hasRequiredRole = useMemo<boolean>(() => {
        if (!roles) return true;

        return roles.some(requiresRole => userRoles?.includes(requiresRole)); 
    }, [roles, userRoles]);

    if (!isAuth) {
        return <Navigate to={routesPaths.main} state={{ from: location }} replace={true} />;
    }

    if (!hasRequiredRole) {
        return <Navigate to={routesPaths.forbidden} replace={true} />;
    }

    return children;
};