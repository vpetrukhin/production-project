import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArtilclesPageProps {
    className?: string;
}

const ArtilclesPage = (props: ArtilclesPageProps) => {
    const { className } = props;
    const {t} = useTranslation('article');

    return (
        <div className={classNames(cls.ArtilclesPage, {}, [className])}>
            {t('ArtilclesPage')}
        </div>
    );
};

export default memo(ArtilclesPage);