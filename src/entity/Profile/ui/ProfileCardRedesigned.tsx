import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ProfileCardProps } from './ProfileCard/ProfileCard';
import { CountrySelect } from '@/entity/Country';
import { CurrencySelect } from '@/entity/Currency';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import cls from './ProfileCard/ProfileCard.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
    const {
        className,
        data,
        onAgeChange,
        onAvatarChange,
        onCityChange,
        onCountryChange,
        onCurrencyChange,
        onFirstnameChange,
        onLastnameChange,
        onUsernameChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    return (
        <Card
            data-testid={'ProfileCard'}
            max
            className={classNames(cls.ProfileCardRedesigned, {}, [className])}
            padding={'24'}
        >
            <VStack gap={'16'}>
                <HStack
                    justify="center"
                    max
                >
                    <Avatar
                        size={128}
                        src={data?.avatar}
                    />
                </HStack>
                <HStack
                    gap={'24'}
                    max
                >
                    <VStack
                        gap={'16'}
                        align="start"
                        max
                    >
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
                        <Input
                            value={data?.city}
                            onChange={onCityChange}
                            label={t('Город')}
                            readonly={readonly}
                        />
                    </VStack>
                    <VStack
                        gap={'16'}
                        align="start"
                        max
                    >
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
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};
