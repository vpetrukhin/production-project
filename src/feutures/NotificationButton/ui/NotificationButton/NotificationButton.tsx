import { useState, useCallback } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entity/Notification';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Icon } from '@/shared/ui/Icon/Icon';
import cls from './NotificationButton.module.scss';
import NotificationsIcon from '@/shared/assets/icons/notifications.svg';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { className } = props;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpenDrawer = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const handleCloseDrawer = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    const trigger = (
        <Button
            className={cls.notificationButton}
            theme={ButtonTheme.CLEAR}
            onClick={handleOpenDrawer}
        >
            <Icon
                Svg={NotificationsIcon}
                color='inverted'
            />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}                
                    trigger={trigger}
                >
                    <NotificationList className={cls.list} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={handleCloseDrawer}
                >
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
};