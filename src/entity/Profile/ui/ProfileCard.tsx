import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from '@/entity/Currency';
import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { Profile } from '../model/types/profile';
import cls from './ProfileCard.module.scss';
import { CountrySelect } from '@/entity/Country';
import { Country } from '@/entity/Country/model/types/Countries';
import { HStack } from '@/shared/ui/Stack';


interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onFirstnameChange?: (value: string) => void;
    onLastnameChange?: (value: string) => void;
    onAgeChange?: (value: string) => void;
    onCityChange?: (value: string) => void;
    onUsernameChange?: (value: string) => void;
    onAvatarChange?: (value: string) => void;
    onCurrencyChange?: (value: Currency) => void;
    onCountryChange?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onFirstnameChange,
        onLastnameChange,
        onAgeChange,
        onCityChange,
        onUsernameChange,
        onAvatarChange,
        onCurrencyChange,
        onCountryChange
    } = props;
    const {t} = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack justify='center'>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify='center'>
                <Text 
                    error
                    title={t('Произошла ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mode = {
        [cls.editableForm]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <HStack justify='center'>
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
        </div>
    );
};