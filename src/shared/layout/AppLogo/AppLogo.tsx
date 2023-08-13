import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import AppLogoSvg from './AppLogo.svg';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '../../ui/redesigned/Icon';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = (props: AppLogoProps) => {
    const { className, size } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.AppLogoWrapper, {}, [className])}
        >
            <div className={classNames(cls.gradient, {}, [cls.big])} />
            <div className={classNames(cls.gradient, {}, [cls.small])} />
            <Icon
                Svg={AppLogoSvg}
                className={cls.AppLogo}
                width={size}
                height={size}
            />
        </HStack>
    );
};
