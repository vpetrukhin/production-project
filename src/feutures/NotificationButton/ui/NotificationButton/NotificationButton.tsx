import { useState, useCallback } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entity/Notification';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import cls from './NotificationButton.module.scss';
import NotificationsIcon from '@/shared/assets/icons/notifications.svg';
import NotificationsIconNew from '@/shared/assets/icons/notificationsNew.svg';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';

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

    const getTrigger = () => {
        return (
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <Button
                        className={cls.notificationButton}
                        onClick={handleOpenDrawer}
                    >
                        <Icon
                            Svg={NotificationsIconNew}
                            color="inverted"
                        />
                    </Button>
                }
                off={
                    <Button
                        className={cls.notificationButton}
                        onClick={handleOpenDrawer}
                    >
                        <Icon
                            Svg={NotificationsIcon}
                            color="inverted"
                        />
                    </Button>
                }
            />
        );
    };

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    trigger={getTrigger()}
                >
                    <NotificationList className={cls.list} />
                </Popover>
            </BrowserView>
            <MobileView>
                {getTrigger()}
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
