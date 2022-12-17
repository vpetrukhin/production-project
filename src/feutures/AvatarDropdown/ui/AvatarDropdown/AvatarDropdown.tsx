
import { getIsAdmin, getIsManager, getUserInfo, UserActions } from '@/entity/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { getAdminPanelPath, getProfilePath } from '@/shared/config/const/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
    const { className } = props;
    const {t} = useTranslation();

    const dispatch = useAppDispatch();
    const userInfo = useSelector(getUserInfo);
    const isAdmin = useSelector(getIsAdmin);
    const isManager = useSelector(getIsManager);

    const isAvailableToAdminPanel = isAdmin || isManager;
    const handleLogout = useCallback(() => {
        dispatch(UserActions.logout());
    }, [dispatch]);

    return (
        <Dropdown
            className={className}                
            trigger={<Avatar size={30} src={userInfo?.avatar} />}
            items={[
                ...(isAvailableToAdminPanel ? [{
                    content: t('adminka'),
                    href: getAdminPanelPath()
                }] : []),
                {
                    content: t('Профиль'),
                    href: getProfilePath(userInfo?.id || '')
                },
                {
                    content: t('Выйти'),
                    onClick: handleLogout
                }
            ]}
        />
    );
};