import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { EditableProfileCard } from '@/feutures/EditableProfileCard';
import { Text } from '@/shared/ui/Text/Text';


interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const {t} = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    if (!id) return <Text title={t('nekkorektnyi-id-polzovatelya')} />;

    return (
        <Page className={className}>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;

