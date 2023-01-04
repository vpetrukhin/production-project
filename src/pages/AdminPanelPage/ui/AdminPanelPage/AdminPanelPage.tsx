
import { useTranslation } from 'react-i18next';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <div className={className} data-testid='AdminPanelPage'>
            {t('panel-administratora')}
        </div>
    );
};

export default AdminPanelPage;