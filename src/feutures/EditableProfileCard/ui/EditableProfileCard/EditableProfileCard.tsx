import { useCallback } from 'react';
import { Country } from '@/entity/Country';
import { Currency } from '@/entity/Currency';
import { ProfileCard } from '@/entity/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { useProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { useProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { ProfileReducer, useProfileActions } from '../../model/slice/ProfileSlice';
import { DynamicModule, ReducerList } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';

const reducers: ReducerList = {
    'profile': ProfileReducer
};

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const { updateProfile } = useProfileActions();
    const form = useProfileForm();
    const error = useProfileError();
    const isLoading = useProfileIsLoading();
    const readonly = useProfileReadonly();

    useInitialEffect(() => {
        if (id) dispatch(fetchProfileData(id));
    }, []);

    const onFirstnameChange = useCallback((value: string) => {
        updateProfile({ first: value || '' });
    }, [updateProfile]);

    const onLastnameChange = useCallback((value: string) => {
        updateProfile({ lastname: value || '' });
    }, [updateProfile]);

    const onAgeChange = useCallback((value: string) => {
        const numberRegex = /^\d+$/i;
        if (numberRegex.test(value) || value === '') {
            updateProfile({ age: Number(value) });
        }
    }, [updateProfile]);

    const onCityChange = useCallback((value: string) => {
        updateProfile({ city: value || '' });
    }, [updateProfile]);

    const onUsernameChange = useCallback((value: string) => {
        updateProfile({ username: value || '' });
    }, [updateProfile]);

    const onAvatarChange = useCallback((value: string) => {
        updateProfile({ avatar: value || '' });
    }, [updateProfile]);

    const onCurrencyChange = useCallback((value: Currency) => {
        updateProfile({ currency: value });
    }, [updateProfile]);

    const onCountryChange = useCallback((value: Country) => {
        updateProfile({ country: value });
    }, [updateProfile]);

    return (
        <DynamicModule reducers={reducers}>
            <EditableProfileCardHeader />
            <ProfileCard
                className={className}
                data={form}
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
        </DynamicModule>
    );
};