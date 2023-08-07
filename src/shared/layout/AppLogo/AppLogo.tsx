import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import AppLogoSvg from './AppLogo.svg'
import { HStack } from '@/shared/ui/Stack';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = (props: AppLogoProps) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <HStack max justify='center' className={classNames(cls.AppLogoWrapper, {}, [className])}>
            <div className={classNames(cls.gradient, {}, [cls.big])} />
            <div className={classNames(cls.gradient, {}, [cls.small])} />
            <AppLogoSvg className={cls.AppLogo} />
        </HStack>
    );
};