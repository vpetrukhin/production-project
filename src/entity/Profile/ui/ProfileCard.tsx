import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'entity/Currency';
import { classNames, Mode } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Profile } from '../model/types/ProfileSchema';
import cls from './ProfileCard.module.scss';
import { CountrySelect } from 'entity/Country';
import { Country } from 'entity/Country/model/types/Countries';


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
    const {t} = useTranslation();

    if (isLoading) {
        return (
            <div className={cls.loading}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={cls.error}>
                <Text 
                    error
                    title={t('Произошла ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mode = {
        [cls.editableForm]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.avatarWrapper}>
                <Avatar src={data?.avatar} />
            </div>
            <Input
                value={data?.first}
                onChange={onFirstnameChange}
                placeholder={t('Ваше имя')}
                readonly={readonly}
            />
            <Input
                value={data?.lastname}
                onChange={onLastnameChange}
                placeholder={t('Фамилия')}
                readonly={readonly}
            />
            <Input
                value={data?.age}
                onChange={onAgeChange}
                placeholder={t('Возраст')}
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
                placeholder={t('Город')}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                onChange={onUsernameChange}
                placeholder={t('Имя пользователя')}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                onChange={onAvatarChange}
                placeholder={t('Аватар')}
                readonly={readonly}
            />
        </div>
    );
};