import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsAuth } from '@/entity/User';
import { getUserRoles, UserRoles } from '@/entity/User';
import { useMemo } from 'react';
import { getForbiddenPath, getMainPath } from '@/shared/config/const/router';

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
        return <Navigate to={getMainPath()} state={{ from: location }} replace={true} />;
    }

    if (!hasRequiredRole) {
        return <Navigate to={getForbiddenPath()} replace={true} />;
    }

    return children;
};