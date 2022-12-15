import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './PageError.module.scss';


interface PageErrorProps {
    className?: string;
}
export const PageError = (props: PageErrorProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const onReload = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Что-то пошло не так')}.</h1>
            <Button onClick={onReload}>{t('Обновить страницу')}</Button>
        </div>
    );
};
