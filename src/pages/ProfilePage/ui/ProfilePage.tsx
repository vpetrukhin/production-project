import { ProfileReducer } from 'entity/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule, ReducerList } from 'shared/lib/DynamicModule/DynamicModule';
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

    return (
        <DynamicModule reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {t('Профиль')}
            </div>
        </DynamicModule>
    );
};

export default ProfilePage;
