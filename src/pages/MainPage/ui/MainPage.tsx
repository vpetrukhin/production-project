import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ArticleForm } from '@/entity/Article';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page data-testid={'MainPage'}>
            {t('Главная страница')}
            <ArticleForm onSubmit={(data) => console.log(data)} />
        </Page>
    );
};

export default MainPage;
