import { useEffect } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ProfileReducer } from 'entity/Profile';
import { getProfileData } from 'entity/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entity/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entity/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { fetchProfileData } from 'entity/Profile/model/services/fetchProfileData/fetchProfileData';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule, ReducerList } from 'shared/lib/DynamicModule/DynamicModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Input } from 'shared/ui/Input/Input';
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
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);


    useEffect(() => {
        // TODO: fix types
        dispatch(fetchProfileData() as unknown as AnyAction);
    }, [dispatch]);

    return (
        <DynamicModule reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {t('Профиль')}
                <Input value={data?.first} placeholder={t('Ваше имя')} />
                <Input value={data?.lastname} placeholder={t('Фамилия')} />
            </div>
        </DynamicModule>
    );
};

export default ProfilePage;
