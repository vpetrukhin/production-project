import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { getMainPath } from '@/shared/config/const/router';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page data-testid="ForbiddenPage">
            <VStack
                justify="center"
                align="center"
                gap="8"
                className={className}
            >
                <Text title={t('net-dostupa')} />
                <AppLink to={getMainPath()}>
                    {t('pereiti-na-glavnuyu-stranicu')}
                </AppLink>
            </VStack>
        </Page>
    );
};

export default ForbiddenPage;
