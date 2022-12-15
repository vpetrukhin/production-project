import { Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { ProtectedRoute } from './ProtectedRoute';
import { IRoute } from '@/shared/types/router';
import { routesConfig } from '../config/routes';


export const AppRouter = () => {
    const renderWithWrapper = useCallback(({ element, onlyAuthorized, path, roles }: IRoute) => {
        return <Route
            key={path}
            path={path}
            element={onlyAuthorized ? <ProtectedRoute roles={roles} >{element}</ProtectedRoute> : element}
        />;
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routesConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};
