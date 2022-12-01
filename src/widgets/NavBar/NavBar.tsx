import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { LoginModal } from 'feutures/AuthByUserName';
import { getIsAdmin, getIsManager, getUser, getUserInfo, UserActions } from 'entity/User';
import { routesPaths } from 'shared/config/router/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { HStack } from 'shared/ui/Stack';
import { Text, TextColor } from 'shared/ui/Text/Text';
import cls from './NavBar.module.scss';


export interface NavbarProps {
    className?: string;
}

export const NavBar = (props: NavbarProps) => {
    const { className } = props;
    const {t} = useTranslation();

    const dispatch = useDispatch();
    const userInfo = useSelector(getUserInfo);
    const isAdmin = useSelector(getIsAdmin);
    const isManager = useSelector(getIsManager);

    const isAvailableToAdminPanel = isAdmin || isManager;

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleLogout = useCallback(() => {
        dispatch(UserActions.logout());
        setIsModalOpen(false);
    }, [dispatch]);

    useEffect(() => {
        handleCloseModal();
    }, [handleCloseModal, userInfo]);

    if (userInfo) {
        return (
            <HStack className={classNames(cls.NavBar, {}, [className])}>
                <Text title={t('ProdApp')} color={TextColor.PRIMARY} />
                <HStack gap='16' className={cls.links}>
                    <Dropdown
                        trigger={<Avatar size={30} src={userInfo.avatar} />}
                        items={[
                            ...(isAvailableToAdminPanel ? [{
                                content: t('adminka'),
                                href: routesPaths.admin
                            }] : []),
                            {
                                content: t('Профиль'),
                                href: routesPaths.profile + userInfo.id
                            },
                            {
                                content: t('Выйти'),
                                onClick: handleLogout
                            }
                        ]}
                    />
                    
                </HStack>
            </HStack>
        );
    }

    return (
        <HStack className={classNames(cls.NavBar, {}, [className])}>
            <Text title={t('ProdApp')} color={TextColor.PRIMARY} />
            <HStack gap='16' className={cls.links}>
                <Button theme={ButtonTheme.INVERTED_OUTLINE} onClick={handleOpenModal}>
                    {t('Войти')}
                </Button>
                {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />}
            </HStack>
        </HStack>
    );
};