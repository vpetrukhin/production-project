import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextColor } from 'shared/ui/Text/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
    const { className, item } = props;

    let content = 
        <div className={classNames(cls.NotificationItem, {}, [className])}>
            <Text 
                title={item.title}
                text={item.description}
                color={TextColor.PRIMARY}
            />
        </div>;

    if (item.href) {
        content = 
        <a href={item.href} className={classNames(cls.NotificationItem, {}, [className, cls.link])}>
            <Text 
                title={item.title}
                text={item.description}
                color={TextColor.PRIMARY}
            />
        </a>;
    }

    return content;
};