import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entity/Rating';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <RatingCard hasFeedback feedbackTitle='Как вам статья?' />
        </Page>
    );
};

export default MainPage;