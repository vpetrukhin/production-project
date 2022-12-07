
import { useTranslation } from 'react-i18next';
import { routesPaths } from '@/shared/config/router/routerConfig';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page/Page';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <Page>
            <VStack justify='center' align='center' gap='8' className={className}>
                <Text title={t('net-dostupa')} />
                <AppLink to={routesPaths.main}>{t('pereiti-na-glavnuyu-stranicu')}</AppLink>
            </VStack>
        </Page>
    );
};

export default ForbiddenPage;