import { useUserInfo } from '@/entity/User';
import { LoginModal } from '@/feutures/AuthByUserName';
import { RegistrationForm } from '@/feutures/Registration';
import { getMainPath } from '@/shared/config/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import cls from './RegistrationPage.module.scss';

interface RegistrationPageProps {
    className?: string;
}

const RegistrationPage = (props: RegistrationPageProps) => {
    const { className } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const navigateToMainPage = useCallback(() => {
        navigate(getMainPath());
    }, [navigate]);

    const userInfo = useUserInfo();

    useEffect(() => {
        if (userInfo) {
            navigateToMainPage();
        }
    }, [navigateToMainPage, userInfo]); 

    const handleSuccess = () => {
        setIsModalOpen(true);
    };

    const handleLoginClose = () => {
        setIsModalOpen(false);
        navigateToMainPage();
    };

    return (
        <Page className={classNames('cls.RegistrationPage', {}, [className])}>
            <RegistrationForm onSuccess={handleSuccess} />
            {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={handleLoginClose} />}
        </Page>
    );
};

export default RegistrationPage;