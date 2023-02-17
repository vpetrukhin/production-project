import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FormFields, FormFieldsKey } from '../types/RegistrationSliceSchema';

type FieldsErrors = FormFieldsKey[];

type Result = [FieldsErrors, Dispatch<SetStateAction<FieldsErrors>>]

// const FormFieldsErrorsMap: Record<FormFieldsKey, string> = {
//     age: 'Возраст',
//     avatar: 'Аватар',
//     city: 'Город',
//     first: 'Имя',
//     lastname: 'Фамилия',
//     password: 'Пароль',
//     username: 'Логин',
// };

export const useValidateRegistrationForm = (form: FormFields | undefined, isSubmitOnePeace: boolean): Result => {
    const [errors, setErrors] = useState<FieldsErrors>([]);

    useEffect(() => {
        if (!form) {
            setErrors([]);
        } else {
            if (isSubmitOnePeace) {
                for (const field in form) {
                    if ((field === 'username' || field === 'password' || field === 'lastname' || field === 'first' || field === 'city' || field === 'avatar') && form[field] === '') {
                        setErrors(prev => [...prev, field]);
                        // errors.push(`Не валидное поле: ${FormFieldsErrorsMap[field]}`);
                    }
                    if (field === 'age' && form[field] === 0) {
                        setErrors(prev => [...prev, field]);
                        // errors.push(`Не валидное поле: ${FormFieldsErrorsMap[field]}`);
                    }
                }
            }
        }
    }, [form, isSubmitOnePeace]);

    return [errors, setErrors];
};