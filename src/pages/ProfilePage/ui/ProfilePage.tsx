import { AnyAction } from '@reduxjs/toolkit';
import { ProfileReducer } from 'entity/Profile';
import { fetchProfileData } from 'entity/Profile/model/services/fetchProfileData/fetchProfileData';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule, ReducerList } from 'shared/lib/DynamicModule/DynamicModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
// import cls from './ProfilePage.module.scss';


const reducers: ReducerList = {
    'profile': ProfileReducer
};
interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();

    useEffect(() => {
        // TODO: fix types
        dispatch(fetchProfileData() as unknown as AnyAction);
    }, [dispatch]);

    return (
        <DynamicModule reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {t('Профиль')}
            </div>
        </DynamicModule>
    );
};

export default ProfilePage;
