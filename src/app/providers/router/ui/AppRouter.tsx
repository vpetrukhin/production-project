import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from 'shared/config/router/routerConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';


export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routesConfig).map(({ path, element }) => <Route
                    key={path}
                    path={path}
                    element={
                        <div className='page'>
                            {element}
                        </div>
                    }
                />)}
            </Routes>
        </Suspense>
    );
};
