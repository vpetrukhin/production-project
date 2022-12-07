import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesDetailsCreatePage.module.scss';

interface ArticlesDetailsCreatePageProps {
    className?: string;
}

const ArticlesDetailsCreatePage = (props: ArticlesDetailsCreatePageProps) => {
    const { className } = props;
    const {t} = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlesDetailsCreatePage, {}, [className])}>
            {t('create-article')}
        </div>
    );
};

export default ArticlesDetailsCreatePage;
