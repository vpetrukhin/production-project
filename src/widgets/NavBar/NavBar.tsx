import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/feutures/AuthByUserName';
import { NotificationButton } from '@/feutures/NotificationButton';
import { AvatarDropdown } from '@/feutures/AvatarDropdown';
import { getUserInfo } from '@/entity/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextColor } from '@/shared/ui/Text/Text';
import cls from './NavBar.module.scss';


export interface NavbarProps {
    className?: string;
}

export const NavBar = (props: NavbarProps) => {
    const { className } = props;
    const {t} = useTranslation();

    const userInfo = useSelector(getUserInfo);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    useEffect(() => {
        handleCloseModal();
    }, [handleCloseModal, userInfo]);

    if (userInfo) {
        return (
            <HStack className={classNames(cls.NavBar, {}, [className])}>
                <Text title={t('ProdApp')} color={TextColor.PRIMARY} />
                <HStack gap='16' className={cls.links}>
                    <NotificationButton />
                    <AvatarDropdown />
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