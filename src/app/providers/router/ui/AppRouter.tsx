import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from 'shared/config/router/routerConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { ProtectedRoute } from './ProtectedRoute';


export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routesConfig).map(({ path, element, onlyAuthorized }) => <Route
                    key={path}
                    path={path}
                    element={
                        onlyAuthorized
                            ? <ProtectedRoute>
                                {element}
                            </ProtectedRoute>
                            : 
                            (
                                <div className='page'>
                                    {element}
                                </div>
                            )
                    }
                />)}
            </Routes>
        </Suspense>
    );
};
