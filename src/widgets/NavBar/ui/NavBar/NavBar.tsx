import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { LoginModal } from '@/feutures/AuthByUserName';
import { NotificationButton } from '@/feutures/NotificationButton';
import { AvatarDropdown } from '@/feutures/AvatarDropdown';
import { useUserInfo } from '@/entity/User';
import {
    getArticleCreatePath,
    getRegistrationPath,
} from '@/shared/config/const/router';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Button } from '@/shared/ui/redesigned/Button';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import cls from './NavBar.module.scss';
import EditIcon from './edit.svg';

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
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <HStack
                        gap="16"
                        justify="end"
                        className={classNames(cls.NavBar_redesign, {}, [
                            className,
                        ])}
                    >
                        <AppLink to={getArticleCreatePath()}>
                            <Icon Svg={EditIcon} />
                        </AppLink>
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                }
                off={
                    <HStack className={classNames(cls.NavBar, {}, [className])}>
                        <TextDeprecated title={t('ProdApp')} />
                        <HStack
                            gap="16"
                            className={cls.links}
                        >
                            <AppLinkDeprecated
                                to={getArticleCreatePath()}
                                theme="inverted"
                            >
                                {t('create-article')}
                            </AppLinkDeprecated>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </HStack>
                }
            />
        );
    }

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <HStack className={classNames(cls.NavBar, {}, [className])}>
                    <HStack
                        gap="16"
                        className={cls.links}
                    >
                        {!isRegisrationPage && (
                            <AppLink to={getRegistrationPath()}>
                                {t('registraciya')}
                            </AppLink>
                        )}
                        <Button onClick={handleOpenModal}>{t('Войти')}</Button>
                        {isModalOpen && (
                            <LoginModal
                                isOpen={isModalOpen}
                                onClose={handleCloseModal}
                            />
                        )}
                    </HStack>
                </HStack>
            }
            off={
                <HStack className={classNames(cls.NavBar, {}, [className])}>
                    <TextDeprecated title={t('ProdApp')} />
                    <HStack
                        gap="16"
                        className={cls.links}
                    >
                        {!isRegisrationPage && (
                            <AppLinkDeprecated
                                to={getRegistrationPath()}
                                theme="inverted"
                            >
                                {t('registraciya')}
                            </AppLinkDeprecated>
                        )}
                        <ButtonDeprecated
                            theme={'inverted_outline'}
                            onClick={handleOpenModal}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                        {isModalOpen && (
                            <LoginModal
                                isOpen={isModalOpen}
                                onClose={handleCloseModal}
                            />
                        )}
                    </HStack>
                </HStack>
            }
        />
    );
};
