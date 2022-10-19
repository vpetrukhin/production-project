import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const {t} = useTranslation('profile');

    return (
        <div className={classNames('', {}, [className])}>
            {t('Профиль')}
        </div>
    );
};

export default ProfilePage;
