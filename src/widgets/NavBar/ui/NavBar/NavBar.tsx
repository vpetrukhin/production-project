import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@/feutures/AuthByUserName';
import { NotificationButton } from '@/feutures/NotificationButton';
import { AvatarDropdown } from '@/feutures/AvatarDropdown';
import { useUserInfo } from '@/entity/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cls from './NavBar.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import {
    getArticleCreatePath,
    getRegistrationPath,
} from '@/shared/config/const/router';
import { useLocation } from 'react-router-dom';

export interface NavbarProps {
    className?: string;
}

export const NavBar = (props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { pathname } = useLocation();

    const isRegisrationPage = useMemo(
        () => pathname === getRegistrationPath(),
        [pathname],
    );

    const userInfo = useUserInfo();

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
                <Text title={t('ProdApp')} />
                <HStack
                    gap="16"
                    className={cls.links}
                >
                    <AppLink
                        to={getArticleCreatePath()}
                        theme="inverted"
                    >
                        {t('create-article')}
                    </AppLink>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </HStack>
        );
    }

    return (
        <HStack className={classNames(cls.NavBar, {}, [className])}>
            <Text title={t('ProdApp')} />
            <HStack
                gap="16"
                className={cls.links}
            >
                {!isRegisrationPage && (
                    <AppLink
                        to={getRegistrationPath()}
                        theme="inverted"
                    >
                        {t('registraciya')}
                    </AppLink>
                )}
                <Button
                    theme={'inverted_outline'}
                    onClick={handleOpenModal}
                >
                    {t('Войти')}
                </Button>
                {isModalOpen && (
                    <LoginModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                    />
                )}
            </HStack>
        </HStack>
    );
};
