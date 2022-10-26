import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { EditableProfileCard, EditableProfileCardHeader } from 'feutures/EditableProfileCard';
import { ProfileReducer } from 'entity/Profile';
import { fetchProfileData } from 'entity/Profile/model/services/fetchProfileData/fetchProfileData';
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
        console.log(__PROJECT__);
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <DynamicModule reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                <EditableProfileCard />
            </div>
        </DynamicModule>
    );
};

export default ProfilePage;
