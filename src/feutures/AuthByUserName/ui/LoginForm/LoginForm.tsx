import { FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Text, TextColor } from 'shared/ui/Text/Text';
import { DynamicModule } from 'shared/lib/ui/DynamicModule/DynamicModule';
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

    const onLoginClick = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModule reducers={{ login: LoginReducer }}>
            <form onSubmit={onLoginClick} className={classNames(cls.LoginForm, {}, [className])}>
                <Text color={TextColor.PRIMARY} title={t('Форма авторизации')} />
                {error && <Text text={t('Неправильный логин или пароль')} error />}
                <Input 
                    autoFocus
                    label={t('Логин')}
                    value={username}
                    onChange={onUsernameChange}
                    theme={InputTheme.INVERTED}
                />
                <Input
                    label={t('Пароль')}
                    value={password}
                    onChange={onPasswordChange}
                    theme={InputTheme.INVERTED}
                />
                <Button
                    type='submit'
                    loading={isLoading}
                    disabled={isLoading}
                    theme={ButtonTheme.INVERTED_OUTLINE}
                    className={cls.btn}
                >
                    {t('Войти')}
                </Button> 
            </form>
        </DynamicModule>
    );
});

export default LoginForm;
