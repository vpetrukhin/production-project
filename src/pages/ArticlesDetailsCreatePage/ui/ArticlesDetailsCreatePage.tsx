import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesDetailsCreatePage.module.scss';
import { Page } from '@/widgets/Page';
import { CreateArticleForm } from '@/feutures/CreateArticleForm';

interface ArticlesDetailsCreatePageProps {
    className?: string;
}

const ArticlesDetailsCreatePage = (props: ArticlesDetailsCreatePageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    return (
        <Page
            className={classNames(cls.ArticlesDetailsCreatePage, {}, [
                className,
            ])}
        >
            <CreateArticleForm />
        </Page>
    );
};

export default ArticlesDetailsCreatePage;
