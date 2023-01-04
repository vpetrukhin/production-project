import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';


interface NotFoundPageProps {
    className?: string;
}


export const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <Page className={className} data-testid='NotFoundPage'>
            <p className={cls.text}>{t('Страница не найдена')}</p>
        </Page>
    );
};