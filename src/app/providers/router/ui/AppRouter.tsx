import { Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { IRoute, routesConfig } from 'shared/config/router/routerConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { ProtectedRoute } from './ProtectedRoute';


export const AppRouter = () => {
    const renderWithWrapper = useCallback(({ element, onlyAuthorized, path }: IRoute) => {
        

        return <Route
            key={path}
            path={path}
            element={onlyAuthorized ? <ProtectedRoute>{element}</ProtectedRoute> : element}
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
