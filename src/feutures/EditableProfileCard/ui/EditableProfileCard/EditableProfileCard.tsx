import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import { getProfileData, getProfileError, getProfileIsLoading, getProfileReadonly, ProfileActions, ProfileCard } from 'entity/Profile';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface EditableProfileCardProps {
    className?: string;
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    const onFirstnameChange = useCallback((value: string) => {
        dispatch(ProfileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onLastnameChange = useCallback((value: string) => {
        dispatch(ProfileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onAgeChange = useCallback((value: string) => {
        const numberRegex = /^\d+$/i;
        if (numberRegex.test(value)) {
            dispatch(ProfileActions.updateProfile({ age: Number(value || 0) }));
        }
    }, [dispatch]);

    const onCityChange = useCallback((value: string) => {
        dispatch(ProfileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(ProfileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onAvatarChange = useCallback((value: string) => {
        dispatch(ProfileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onCurrencyChange = useCallback((value: Currency) => {
        dispatch(ProfileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onCountryChange = useCallback((value: Country) => {
        dispatch(ProfileActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <ProfileCard
            className={className}
            data={data}
            error={error}
            isLoading={isLoading}
            readonly={readonly}
            onFirstnameChange={onFirstnameChange}
            onLastnameChange={onLastnameChange}
            onAgeChange={onAgeChange}
            onCityChange={onCityChange}
            onUsernameChange={onUsernameChange}
            onAvatarChange={onAvatarChange}
            onCurrencyChange={onCurrencyChange}
            onCountryChange={onCountryChange}
        />
    );
};