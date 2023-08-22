import { useTranslation } from 'react-i18next';
import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import { ProfileCardProps } from './ProfileCard/ProfileCard';
import cls from './ProfileCard/ProfileCard.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entity/Currency';
import { CountrySelect } from '@/entity/Country';

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
    const {
        className,
        readonly,
        data,
        onAgeChange,
        onAvatarChange,
        onCityChange,
        onCountryChange,
        onCurrencyChange,
        onFirstnameChange,
        onLastnameChange,
        onUsernameChange,
    } = props;
    const { t } = useTranslation();

    const mods: Mode = {
        [cls.editableForm]: !readonly,
    };

    return (
        <VStack
            data-testid={'ProfileCard'}
            gap="8"
            max
            align="start"
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            <HStack
                justify="center"
                max
            >
                <Avatar src={data?.avatar} />
            </HStack>
            <Input
                value={data?.first}
                onChange={onFirstnameChange}
                label={t('Ваше имя')}
                readonly={readonly}
                data-testid={'ProfileCard.FirstName'}
            />
            <Input
                value={data?.lastname}
                onChange={onLastnameChange}
                label={t('Фамилия')}
                readonly={readonly}
                data-testid={'ProfileCard.LastName'}
            />
            <Input
                value={data?.age}
                onChange={onAgeChange}
                label={t('Возраст')}
                readonly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onCurrencyChange}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onCountryChange}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                onChange={onCityChange}
                label={t('Город')}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                onChange={onUsernameChange}
                label={t('Имя пользователя')}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                onChange={onAvatarChange}
                label={t('Аватар')}
                readonly={readonly}
            />
        </VStack>
    );
};
