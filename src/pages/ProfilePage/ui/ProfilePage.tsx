import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/feutures/EditableProfileCard';
import { ProfileRating } from '@/feutures/ProfileRating';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';
import cls from './ProfilePage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeature } from '@/shared/lib/featureFlags';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    if (!id) return <Text title={t('nekkorektnyi-id-polzovatelya')} />;

    return (
        <Page
            className={toggleFeature({
                name: 'isRedesignEnable',
                on: () => classNames(cls.ProfilePage, {}, [className]),
                off: () => className,
            })}
            data-testid={'ProfilePage'}
        >
            <VStack gap="16">
                <EditableProfileCard id={id} />
                {/* <ProfileRating profileId={id} /> */}
            </VStack>
        </Page>
    );
};

export default ProfilePage;
