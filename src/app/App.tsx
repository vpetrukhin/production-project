import { Suspense, useEffect } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';

import '@/shared/lib/i18n/i18n';
import { initAuthData } from '@/entity/User';
import { useSelector } from 'react-redux';
import { getInited } from '@/entity/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <div className={classNames('app_redesign', {}, [theme])}>
                    <Suspense fallback="">
                        <NavBar />
                        <div className="page-content">
                            <SideBar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
            off={
                <div className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <NavBar />
                        <div className="page-content">
                            <SideBar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
        />
    );

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="page-content">
                    <SideBar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
