import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useGetNotificationListQuery } from '../../api/NotificationApi';
import cls from './NotificationList.module.scss';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = (props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { data, isError, isLoading } = useGetNotificationListQuery();

    if (isError) {
        return (
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <Text
                        text={t('oshibka-zagruzki-uvedomlenii')}
                        error
                    />
                }
                off={
                    <TextDeprecated text={t('oshibka-zagruzki-uvedomlenii')} />
                }
            />
        );
    }

    if (isLoading) {
        return (
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <VStack
                        gap="16"
                        align="start"
                        className={classNames(cls.NotificationList, {}, [
                            className,
                        ])}
                    >
                        <Skeleton
                            height={80}
                            border={10}
                        />
                        <Skeleton
                            height={80}
                            border={10}
                        />
                        <Skeleton
                            height={80}
                            border={10}
                        />
                    </VStack>
                }
                off={
                    <VStack
                        gap="16"
                        align="start"
                        className={classNames(cls.NotificationList, {}, [
                            className,
                        ])}
                    >
                        <SkeletonDeprecated
                            height={80}
                            border={10}
                        />
                        <SkeletonDeprecated
                            height={80}
                            border={10}
                        />
                        <SkeletonDeprecated
                            height={80}
                            border={10}
                        />
                    </VStack>
                }
            />
        );
    }

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <VStack
                    gap="16"
                    align="start"
                    className={classNames(cls.NotificationListRedesigned, {}, [
                        className,
                    ])}
                >
                    {data?.map((notification) => (
                        <NotificationItem
                            key={notification.id}
                            item={notification}
                        />
                    ))}
                </VStack>
            }
            off={
                <VStack
                    gap="16"
                    align="start"
                    className={classNames(cls.NotificationList, {}, [
                        className,
                    ])}
                >
                    {data?.map((notification) => (
                        <NotificationItem
                            key={notification.id}
                            item={notification}
                        />
                    ))}
                </VStack>
            }
        />
    );
};
