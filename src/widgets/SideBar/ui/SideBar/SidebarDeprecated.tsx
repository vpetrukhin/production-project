import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarDeprecated.module.scss';

interface SidebarDeprecatedProps {
    className?: string;
}

export const SidebarDeprecated = (props: SidebarDeprecatedProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.SidebarDeprecated, {}, [className])}
        ></div>
    );
};
