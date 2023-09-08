import { AppRouteByPathPattern, Routes } from '@/shared/config/const/router';
import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export function useAppRoute() {
    const location = useLocation()
    const [appRoute, setAppRoute] = useState(Routes.MAIN)

    useEffect(() => {
        Object.entries(AppRouteByPathPattern).forEach(([pattern, path]) => {
            if (matchPath(pattern, location.pathname)) {
                setAppRoute(path)
            }
        })
    }, [location.pathname])

    return appRoute
}