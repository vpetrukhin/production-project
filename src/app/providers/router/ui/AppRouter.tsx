import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routesConfig } from 'shared/config/router/routerConfig'


export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
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
)
}
