import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './NavBar.module.scss';


export interface NavbarProps {
    className?: string;
}

export const NavBar = (props: NavbarProps) => {
    const { className } = props;
    const {t} = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenCloseModal = useCallback(() => {
        setIsModalOpen(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.OUTLINE} onClick={handleOpenCloseModal}>
                    {t('Войти')}
                </Button>
                <Modal isOpen={isModalOpen} onClose={handleOpenCloseModal}>
                    {t('Переключить')}
                </Modal>
            </div>
        </div>
    );
};