import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entity/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';
import { useParams } from 'react-router-dom';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const {t} = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <ArticleDetails articleId={id || ''} />
        </div>
    );
};

export default memo(ArticlesDetailsPage);