import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
// import cls from './RegistrationForm.module.scss';
import { useRegMutation } from '../../api/Registration';
import { FormEvent, FormEventHandler, useEffect, useRef, useState } from 'react';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { useRegErrors, useRegForm } from '../../model/selectors/registration';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { RegistrationReducer, useRegistrationActions } from '../../model/slice/RegistrationSlice';
import { FormFieldsKey } from '../../types/RegistrationSliceSchema';
import { useValidateRegistrationForm } from '../../lib/useValidateRegistarationForm';

interface RegistrationFormProps {
    className?: string;
    onSuccess: () => void;
}

export const RegistrationForm = (props: RegistrationFormProps) => {
    const { className, onSuccess } = props;
    const {t} = useTranslation();

    const [onReg, res] = useRegMutation();
    const { isError, isLoading, isSuccess } = res;

    const form = useRegForm();
    const { updateForm, resetForm } = useRegistrationActions();

    const [isSubmitOnePeace, setIsSubmitOnePeace] = useState(false);

    const [errors, setErrors] = useValidateRegistrationForm(form, isSubmitOnePeace);

    useEffect(() => {
        if (isSuccess) {
            resetForm();
            onSuccess();
        }
    }, [isSuccess, onSuccess, resetForm]);

    const handleStringInputChange = (field: FormFieldsKey) => (value: string)  => {
        setErrors([]);
        updateForm({ [field]: value });
    };

    const handleAgeInputChange = (value: string) => {
        setErrors([]);
        const age = Number(value);
        if (!Number.isNaN(age)) {
            updateForm({ age });
        }
    };

    const getIsInputError = (field: FormFieldsKey): boolean => {
        return Boolean(errors.find((errField) => errField === field));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isSubmitOnePeace) {
            setIsSubmitOnePeace(true);
        }

        if (form) {
            if (errors.length === 0) {
                onReg(form);
            }
        }
    };

    return (
        <DynamicModule reducers={{ reg: RegistrationReducer }}>
            <Card theme='outline'>
                <form onSubmit={handleSubmit}>
                    <VStack gap='8' className={classNames('cls.RegistrationForm', {}, [className])}>
                        <Text title={t('forma-registracii')} color='inverted'/>
                        <Input
                            label={t('login')}
                            value={form?.username}
                            onChange={handleStringInputChange('username')}
                            isError={getIsInputError('username')}
                        />
                        <Input
                            label={t('password')}
                            value={form?.password}
                            onChange={handleStringInputChange('password')}
                            isError={getIsInputError('password')}
                        />
                        <Input
                            label={t('name')}
                            value={form?.first}
                            onChange={handleStringInputChange('first')}
                            isError={getIsInputError('first')}
                        />
                        <Input
                            label={t('lastname')}
                            value={form?.lastname}
                            onChange={handleStringInputChange('lastname')}
                            isError={getIsInputError('lastname')}
                        />
                        <Input
                            label={t('age')}
                            value={form?.age}
                            onChange={handleAgeInputChange}
                            isError={getIsInputError('age')}
                        />
                        <Input
                            label={t('city')}
                            value={form?.city}
                            onChange={handleStringInputChange('city')}
                            isError={getIsInputError('city')}
                        />
                        <Input
                            label={t('avatar')}
                            value={form?.avatar}
                            onChange={handleStringInputChange('avatar')}
                            isError={getIsInputError('avatar')}
                        />
                        {isError && <Text error text={t('oshibka-registracii')} />}
                        {isSuccess && <Text text={t('vy-zaregistrirovany')} color='inverted' />}
                        <Button disabled={errors.length > 0} loading={isLoading} type='submit' theme='background' max>{t('to_reg')}</Button>
                    </VStack>
                </form>
            </Card>
        </DynamicModule>
    );
};