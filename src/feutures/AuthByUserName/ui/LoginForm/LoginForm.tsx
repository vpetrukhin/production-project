import { LoginActions, LoginReducer } from '../../model/slices/LoginSlice';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { AppDispatch, StateWithReducerManager } from 'app/providers/Redux';
import { Text } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

interface LoginFormProps {
    className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const {t} = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const store = useStore() as StateWithReducerManager;

    useEffect(() => {
        dispatch({ type: '@login/init' });
        store.reducerManager.add('login', LoginReducer);

        return () => {
            dispatch({ type: '@login/remove' });
            store.reducerManager.remove('login');
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(LoginActions.setUsername(value));
    }, [dispatch]);
    
    const onPasswordChange = useCallback((value: string) => {
        dispatch(LoginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
});

export default LoginForm;
