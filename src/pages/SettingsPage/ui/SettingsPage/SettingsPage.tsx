import { UISettings } from '@/feutures/UISettings';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const SettingsPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <VStack
                gap={'16'}
                align="start"
            >
                <Text title={t('nastroiki-polzovatelya')} />

                <UISettings />
            </VStack>
        </Page>
    );
};

export default SettingsPage;
