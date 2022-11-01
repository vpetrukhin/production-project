import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const {t} = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t('ArticlesDetailsPagePage')}
        </div>
    );
};

export default memo(ArticlesDetailsPage);