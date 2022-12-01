
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            {t('panel-administratora')}
        </div>
    );
};

export default AdminPanelPage;