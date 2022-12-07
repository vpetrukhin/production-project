import { Profile } from '@/entity/Profile';
import { ValidateErrors } from '../const/editableProfileCardConsts';

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateErrors[];
}