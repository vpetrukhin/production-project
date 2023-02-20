import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { FormInput } from '@/shared/ui/Input/FormInput';
import { useRegMutation } from '../../api/Registration';
import { RegistrationReducer } from '../../model/slice/RegistrationSlice';
import { FormFields } from '../../types/RegistrationSliceSchema';

interface RegistrationFormProps {
    className?: string;
    onSuccess: () => void;
}

export const RegistrationForm = (props: RegistrationFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<FormFields>();

    const [onReg, res] = useRegMutation();
    const { isError, isLoading, isSuccess } = res;

    useEffect(() => {
        if (isSuccess) {
            onSuccess();
        }
    }, [isSuccess, onSuccess]);

    const onSubmit = (data: FormFields) => {
        onReg(data);

        reset();
    };

    return (
        <DynamicModule reducers={{ reg: RegistrationReducer }}>
            <Card theme="outline">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack
                        gap="8"
                        className={classNames('cls.RegistrationForm', {}, [
                            className,
                        ])}
                    >
                        <Text
                            title={t('forma-registracii')}
                            color="inverted"
                        />
                        <FormInput
                            label={t('login')}
                            error={errors.username?.message}
                            {...register('username', {
                                required: 'Логин нужен обязательно)',
                            })}
                        />
                        <FormInput
                            label={t('password')}
                            error={errors.password?.message}
                            {...register('password', {
                                required: 'Пароль нужен обязательно)',
                            })}
                        />
                        <FormInput
                            label={t('name')}
                            error={errors.first?.message}
                            {...register('first', {
                                required: 'Введите имя, пожалуйста',
                            })}
                        />
                        <FormInput
                            label={t('lastname')}
                            error={errors.lastname?.message}
                            {...register('lastname', {
                                required: 'Введите фамилию, пожалуйста',
                            })}
                        />
                        <FormInput
                            type="number"
                            label={t('age')}
                            error={errors.age?.message}
                            {...register('age', {
                                required: 'Введите возраст',
                                valueAsNumber: true,
                            })}
                        />
                        <FormInput
                            label={t('city')}
                            error={errors.city?.message}
                            {...register('city', {
                                required: 'Введите ваш город',
                            })}
                        />
                        <FormInput
                            label={t('avatar')}
                            error={errors.avatar?.message}
                            {...register('avatar', {
                                pattern: {
                                    value: /[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)?/,
                                    message:
                                        'Введите URL аватара в формате http...',
                                },
                            })}
                        />
                        {isError && (
                            <Text
                                error
                                text={t('oshibka-registracii')}
                            />
                        )}
                        {isSuccess && (
                            <Text
                                text={t('vy-zaregistrirovany')}
                                color="inverted"
                            />
                        )}
                        <Button
                            disabled={!isValid}
                            loading={isLoading}
                            type="submit"
                            theme="background"
                            max
                        >
                            {t('to_reg')}
                        </Button>
                    </VStack>
                </form>
            </Card>
        </DynamicModule>
    );
};
