import { ArticleReducer } from '../../model/slice/ArticleSlice';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule } from 'shared/lib/DynamicModule/DynamicModule';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { className } = props;
    const {t} = useTranslation('article');

    return (
        <DynamicModule reducers={{article: ArticleReducer}}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {t('ArticleDetails')}
            </div>
        </DynamicModule>
    );
};