import { Suspense, useEffect } from 'react';
import { useTheme } from '@/app/providers/theme/lib/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { NavBar } from '@/widgets/NavBar/NavBar';
import { SideBar } from '@/widgets/SideBar';

import '@/shared/lib/i18n/i18n';
import { UserActions } from '@/entity/User';
import { useDispatch, useSelector } from 'react-redux';
import { getInited } from '@/entity/User';


export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getInited);

    useEffect(() => {
        dispatch(UserActions.initAuth());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className='page-content'>
                    <SideBar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
