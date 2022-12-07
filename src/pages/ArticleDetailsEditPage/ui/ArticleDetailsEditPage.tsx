import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsEditPage.module.scss';

interface ArticleDetailsEditPageProps {
    className?: string;
}

const ArticleDetailsEditPage = (props: ArticleDetailsEditPageProps) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.ArticleDetailsEditPage, {}, [className])}>
            {t('edit-article')}
        </div>
    );
};

export default ArticleDetailsEditPage;