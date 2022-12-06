
import { NotificationList } from 'entity/Notification';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';
import NotificationsIcon from 'shared/assets/icons/notifications.svg';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}                
            trigger={
                <Button className={cls.notificationButton} theme={ButtonTheme.CLEAR}>
                    <NotificationsIcon />
                </Button>
            }
        >
            <NotificationList />
        </Popover>
    );
};