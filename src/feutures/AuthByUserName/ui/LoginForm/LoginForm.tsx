import { LoginActions } from '../../model/slices/LoginSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { AppDispatch } from 'app/providers/Redux';
import { Text } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const {t} = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(LoginActions.setUsername(value));
    }, [dispatch]);
    
    const onPasswordChange = useCallback((value: string) => {
        dispatch(LoginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Неправильный логин или пароль')} error />}
            <Input 
                autoFocus
                placeholder={t('Имя пользователя')}
                value={username}
                onChange={onUsernameChange}
            />
            <Input
                placeholder={t('Пароль')}
                value={password}
                onChange={onPasswordChange}
            />
            <Button
                loading={isLoading}
                disabled={isLoading}
                theme={ButtonTheme.OUTLINE}
                className={cls.btn}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button> 
        </div>
    );
};