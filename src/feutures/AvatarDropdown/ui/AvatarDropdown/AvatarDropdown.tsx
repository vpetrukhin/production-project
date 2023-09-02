import {
    getIsAdmin,
    getIsManager,
    getUserInfo,
    UserActions,
} from '@/entity/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    getAdminPanelPath,
    getProfilePath,
    getSettingsPath,
} from '@/shared/config/const/router';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const userInfo = useSelector(getUserInfo);
    const isAdmin = useSelector(getIsAdmin);
    const isManager = useSelector(getIsManager);

    const isAvailableToAdminPanel = isAdmin || isManager;
    const handleLogout = useCallback(() => {
        dispatch(UserActions.logout());
    }, [dispatch]);

    const items = [
        ...(isAvailableToAdminPanel
            ? [
                  {
                      content: t('adminka'),
                      href: getAdminPanelPath(),
                  },
              ]
            : []),
        {
            content: t('Профиль'),
            href: getProfilePath(userInfo?.id || ''),
        },
        {
            content: t('nastroiki'),
            href: getSettingsPath(),
        },
        {
            content: t('Выйти'),
            onClick: handleLogout,
        },
    ];

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <Dropdown
                    className={className}
                    trigger={
                        <Avatar
                            size={48}
                            src={userInfo?.avatar}
                        />
                    }
                    items={items}
                />
            }
            off={
                <DropdownDeprecated
                    className={className}
                    trigger={
                        <AvatarDeprecated
                            size={30}
                            src={userInfo?.avatar}
                        />
                    }
                    items={items}
                />
            }
        />
    );
};
