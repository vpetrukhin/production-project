import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autoFocus placeholder={t('Имя пользователя')} />
            <Input placeholder={t('Пароль')} />
            <Button theme={ButtonTheme.OUTLINE} className={cls.btn}>{t('Войти')}</Button> 
        </div>
    );
};