import { FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { LoginReducer, useLoginAction } from '../../model/slices/LoginSlice';
import { loginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { useLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { useLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { useLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { useLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { VStack } from '@/shared/ui/Stack';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';

interface LoginFormProps {
    className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { setPassword, setUsername } = useLoginAction();
    const username = useLoginUsername();
    const password = useLoginPassword();
    const isLoading = useLoginIsLoading();
    const error = useLoginError();

    const onUsernameChange = useCallback(
        (value: string) => {
            setUsername(value);
        },
        [setUsername],
    );

    const onPasswordChange = useCallback(
        (value: string) => {
            setPassword(value);
        },
        [setPassword],
    );

    const onLoginClick = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(loginByUsername({ username, password }));
        },
        [dispatch, password, username],
    );

    return (
        <DynamicModule reducers={{ login: LoginReducer }}>
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <form
                        onSubmit={onLoginClick}
                        className={classNames(cls.LoginFormRedesigned, {}, [
                            className,
                        ])}
                    >
                        <VStack
                            max
                            gap="16"
                        >
                            <Text title={t('Форма авторизации')} />
                            {error && (
                                <Text
                                    text={t('Неправильный логин или пароль')}
                                    error
                                />
                            )}
                            <Input
                                autoFocus
                                placeholder={t('Логин')}
                                value={username}
                                onChange={onUsernameChange}
                            />
                            <Input
                                placeholder={t('Пароль')}
                                value={password}
                                onChange={onPasswordChange}
                            />
                            <Button
                                type="submit"
                                loading={isLoading}
                                disabled={isLoading}
                                max
                            >
                                {t('Войти')}
                            </Button>
                        </VStack>
                    </form>
                }
                off={
                    <form
                        onSubmit={onLoginClick}
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        <VStack
                            max
                            gap="16"
                        >
                            <TextDeprecated title={t('Форма авторизации')} />
                            {error && (
                                <TextDeprecated
                                    text={t('Неправильный логин или пароль')}
                                    error
                                />
                            )}
                            <InputDeprecated
                                autoFocus
                                label={t('Логин')}
                                value={username}
                                onChange={onUsernameChange}
                                theme={'inverted'}
                            />
                            <InputDeprecated
                                label={t('Пароль')}
                                value={password}
                                onChange={onPasswordChange}
                                theme={'inverted'}
                            />
                            <ButtonDeprecated
                                type="submit"
                                loading={isLoading}
                                disabled={isLoading}
                                theme={'inverted_outline'}
                                max
                            >
                                {t('Войти')}
                            </ButtonDeprecated>
                        </VStack>
                    </form>
                }
            />
        </DynamicModule>
    );
});

export default LoginForm;
