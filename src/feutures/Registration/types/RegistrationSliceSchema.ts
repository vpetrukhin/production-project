export interface FormFields {
    username: string;
    password: string;
    first: string;
    lastname: string;
    age: number;
    city: string;
    avatar: string;
}

export type FormFieldsKey = keyof FormFields;

export interface RegistrationSliceSchema {
    form: FormFields,
    errors: string[]
}

