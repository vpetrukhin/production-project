import { Profile } from 'entity/Profile';
import { ValidateErrors } from '../../types/ProfileSchema';

export const validateProfileData = (profile?: Profile): Array<ValidateErrors> => {
    if (!profile) return [ValidateErrors.INCORRECT_DATA];

    const {
        age, avatar, city, first, lastname, username
    } = profile;
    const errors: Array<ValidateErrors> = [];

    if (age === 0) {
        errors.push(ValidateErrors.INCORRECT_AGE);
    }

    if (avatar === '') {
        errors.push(ValidateErrors.INCORRECT_AVATAR);
    }

    if (city === '') {
        errors.push(ValidateErrors.INCORRECT_CITY);
    }

    if (first === '') {
        errors.push(ValidateErrors.INCORRECT_FIRSTNAME);
    }

    if (lastname === '') {
        errors.push(ValidateErrors.INCORRECT_LASTNAME);
    }

    if (username === '') {
        errors.push(ValidateErrors.INCORRECT_USERNAME);
    }

    return errors;
}; 