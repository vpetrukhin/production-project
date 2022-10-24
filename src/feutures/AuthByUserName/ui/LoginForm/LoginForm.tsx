import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModule } from 'shared/lib/DynamicModule/DynamicModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { LoginActions, LoginReducer } from '../../model/slices/LoginSlice';
import { loginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(LoginActions.setUsername(value));
    }, [dispatch]);
    
    const onPasswordChange = useCallback((value: string) => {
        dispatch(LoginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModule reducers={{ login: LoginReducer }}>
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
        </DynamicModule>
    );
});

export default LoginForm;
