
import { getIsAdmin, getIsManager, getUserInfo, UserActions } from '@/entity/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { routesPaths } from '@/shared/config/router/routerConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import cls from './AvatarDropdown.module.scss';

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
            className={classNames(cls.AvatarDropdown, {}, [className])}                
            trigger={<Avatar size={30} src={userInfo?.avatar} />}
            items={[
                ...(isAvailableToAdminPanel ? [{
                    content: t('adminka'),
                    href: routesPaths.admin
                }] : []),
                {
                    content: t('Профиль'),
                    href: routesPaths.profile + userInfo?.id
                },
                {
                    content: t('Выйти'),
                    onClick: handleLogout
                }
            ]}
        />
    );
};