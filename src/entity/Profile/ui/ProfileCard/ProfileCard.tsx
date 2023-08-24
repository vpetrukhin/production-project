import { useTranslation } from 'react-i18next';
import { Currency } from '@/entity/Currency';
import { Country } from '@/entity/Country';
import { Mode } from '@/shared/lib/classNames/classNames';
import { Profile } from '../../model/types/profile';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { ProfileCardRedesigned } from '../ProfileCardRedesigned';
import { ProfileCardDeprecated } from '../ProfileCardDeprecated';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ReactNode } from 'react';

export interface ProfileCardProps {
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
    leftContainerRender?: ReactNode;
    rightContainerRender?: ReactNode;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { isLoading, error } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <Card
                        max
                        padding="24"
                    >
                        <VStack
                            max
                            gap="16"
                        >
                            <HStack>
                                <Skeleton
                                    border={'50'}
                                    width={128}
                                    height={128}
                                />
                            </HStack>
                            <HStack
                                max
                                gap="24"
                            >
                                <VStack
                                    max
                                    gap="16"
                                >
                                    <Skeleton
                                        height={26}
                                        border={48}
                                    />
                                    <Skeleton
                                        height={26}
                                        border={48}
                                    />
                                    <Skeleton
                                        height={26}
                                        border={48}
                                    />
                                    <Skeleton
                                        height={26}
                                        border={48}
                                    />
                                </VStack>
                                <VStack
                                    max
                                    gap="16"
                                >
                                    <Skeleton
                                        height={26}
                                        border={48}
                                    />
                                    <Skeleton
                                        height={26}
                                        border={48}
                                    />
                                    <Skeleton
                                        height={26}
                                        border={48}
                                    />
                                    <Skeleton
                                        height={26}
                                        border={48}
                                    />
                                </VStack>
                            </HStack>
                        </VStack>
                    </Card>
                }
                off={
                    <HStack justify="center">
                        <LoaderDeprecated />
                    </HStack>
                }
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <HStack justify="center">
                        <Text
                            error
                            title={t('Произошла ошибка')}
                            text={t('Попробуйте обновить страницу')}
                            align={'center'}
                        />
                    </HStack>
                }
                off={
                    <HStack justify="center">
                        <TextDeprecated
                            error
                            title={t('Произошла ошибка')}
                            text={t('Попробуйте обновить страницу')}
                            align={'center'}
                        />
                    </HStack>
                }
            />
        );
    }

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={<ProfileCardRedesigned {...props} />}
            off={<ProfileCardDeprecated {...props} />}
        />
    );
};
