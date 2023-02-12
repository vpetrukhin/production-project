import { FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { LoginReducer, useLoginAction } from '../../model/slices/LoginSlice';
import { loginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { useLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { useLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { useLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { useLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const { setPassword, setUsername } = useLoginAction();
    const username = useLoginUsername();
    const password = useLoginPassword();
    const isLoading = useLoginIsLoading();
    const error = useLoginError();

    const onUsernameChange = useCallback((value: string) => {
        setUsername(value);
    }, [setUsername]);
    
    const onPasswordChange = useCallback((value: string) => {
        setPassword(value);
    }, [setPassword]);

    const onLoginClick = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModule reducers={{ login: LoginReducer }}>
            <form onSubmit={onLoginClick} className={classNames(cls.LoginForm, {}, [className])}>
                <VStack max gap='16'>
                    <Text title={t('Форма авторизации')} />
                    {error && <Text text={t('Неправильный логин или пароль')} error />}
                    <Input 
                        autoFocus
                        label={t('Логин')}
                        value={username}
                        onChange={onUsernameChange}
                        theme={'inverted'}
                    />
                    <Input
                        label={t('Пароль')}
                        value={password}
                        onChange={onPasswordChange}
                        theme={'inverted'}
                    />
                    <Button
                        type='submit'
                        loading={isLoading}
                        disabled={isLoading}
                        theme={'inverted_outline'}
                        max
                    >
                        {t('Войти')}
                    </Button> 
                </VStack>
            </form>
        </DynamicModule>
    );
});

export default LoginForm;
