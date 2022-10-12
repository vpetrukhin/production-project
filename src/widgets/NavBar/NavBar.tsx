import { LoginModal } from 'feutures/AuthByUserName';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './NavBar.module.scss';


export interface NavbarProps {
    className?: string;
}

export const NavBar = (props: NavbarProps) => {
    const { className } = props;
    const {t} = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.OUTLINE} onClick={handleOpenModal}>
                    {t('Войти')}
                </Button>
                <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
        </div>
    );
};