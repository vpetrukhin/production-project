import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticalTextBlockComponent.module.scss';

interface ArticalTextBlockComponentProps {
    className?: string;
}

export const ArticalTextBlockComponent = (props: ArticalTextBlockComponentProps) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.ArticalTextBlockComponent, {}, [className])}></div>
    );
};