import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { useGetNotificationListQuery } from '../../api/NotificationApi';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = (props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { data, isError, isLoading } = useGetNotificationListQuery();

    if (isError) {
        return <Text text={t('oshibka-zagruzki-uvedomlenii')} />;
    }

    if (isLoading) {
        return (
            <VStack
                gap="16"
                align="start"
                className={classNames(cls.NotificationList, {}, [className])}
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
        );
    }

    return (
        <VStack
            gap="16"
            align="start"
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    item={notification}
                />
            ))}
        </VStack>
    );
};
