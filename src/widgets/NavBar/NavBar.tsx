import { getUser, UserActions } from 'entity/User';
import { LoginModal } from 'feutures/AuthByUserName';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
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
    const { userInfo } = useSelector(getUser);

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
                    <Button theme={ButtonTheme.INVERTED_OUTLINE} onClick={handleLogout}>
                        {t('Выйти')}
                    </Button>
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