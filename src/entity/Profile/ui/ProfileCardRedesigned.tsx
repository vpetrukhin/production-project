import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ProfileCardProps as ProfileCardPropsOld } from './ProfileCard/ProfileCard';
import { CountrySelect } from '@/entity/Country';
import { CurrencySelect } from '@/entity/Currency';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import cls from './ProfileCard/ProfileCard.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ReactNode } from 'react';
import { Flex } from '@/shared/ui/Stack/Flex/Flex';

type ProfileCardProps = ProfileCardPropsOld & {
    leftContainerRender?: ReactNode;
    rightContainerRender?: ReactNode;
};

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
        leftContainerRender,
        rightContainerRender,
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
                    justify="around"
                    max
                >
                    <Flex
                        justify="center"
                        className={cls.headerItem}
                    >
                        {leftContainerRender}
                    </Flex>
                    <Avatar
                        size={128}
                        src={data?.avatar}
                    />
                    <Flex
                        justify="center"
                        className={cls.headerItem}
                    >
                        {rightContainerRender}
                    </Flex>
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
