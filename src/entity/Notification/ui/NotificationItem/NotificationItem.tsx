import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
    const { className, item } = props;

    let content = (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <div
                    className={classNames(cls.NotificationItemRedesigned, {}, [
                        className,
                    ])}
                >
                    <Text
                        size="small"
                        title={item.title}
                        text={item.description}
                    />
                </div>
            }
            off={
                <div
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <TextDeprecated
                        title={item.title}
                        text={item.description}
                    />
                </div>
            }
        />
    );

    if (item.href) {
        content = (
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <a
                        href={item.href}
                        className={classNames(
                            cls.NotificationItemRedesigned,
                            {},
                            [className, cls.link],
                        )}
                    >
                        <Text
                            size="small"
                            title={item.title}
                            text={item.description}
                        />
                    </a>
                }
                off={
                    <a
                        href={item.href}
                        className={classNames(cls.NotificationItem, {}, [
                            className,
                            cls.link,
                        ])}
                    >
                        <TextDeprecated
                            title={item.title}
                            text={item.description}
                        />
                    </a>
                }
            />
        );
    }

    return content;
};
