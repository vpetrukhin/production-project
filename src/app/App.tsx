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
import { MainLayout } from '@/shared/layout';
import { useToolbar } from './lib/useToolbar';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getInited);

    const Toolbar = useToolbar();

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
                <div
                    id="app"
                    className={classNames('app_redesign', {}, [theme])}
                >
                    <MainLayout
                        content={inited && <AppRouter />}
                        sidebar={<SideBar />}
                        header={<NavBar />}
                        toolbar={Toolbar}
                    />
                </div>
            }
            off={
                <div
                    id="app"
                    className={classNames('app', {}, [theme])}
                >
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
};
