import { useState, useCallback } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entity/Notification';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Drawer } from '@/shared/ui/Drawer';
import NotificationsIcon from '@/shared/assets/icons/notifications.svg';
import NotificationsIconNew from '@/shared/assets/icons/notificationsNew.svg';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Icon as IconDepreceted } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';
import cls from './NotificationButton.module.scss';

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
                    <Icon
                        className={cls.notificationButton}
                        Svg={NotificationsIconNew}
                        clickable
                        onClick={handleOpenDrawer}
                    />
                }
                off={
                    <ButtonDeprecated
                        className={cls.notificationButton}
                        onClick={handleOpenDrawer}
                    >
                        <IconDepreceted
                            Svg={NotificationsIcon}
                            color="inverted"
                        />
                    </ButtonDeprecated>
                }
            />
        );
    };

    return (
        <>
            <BrowserView>
                <ToggleFeatureComponent
                    name="isRedesignEnable"
                    on={
                        <Popover
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            trigger={getTrigger()}
                        >
                            <NotificationList className={cls.list} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            trigger={getTrigger()}
                        >
                            <NotificationList className={cls.list} />
                        </PopoverDeprecated>
                    }
                />
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
