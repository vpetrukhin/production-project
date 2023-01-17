import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Country } from '@/entity/Country';
import { Currency } from '@/entity/Currency';
import { ProfileCard } from '@/entity/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { ProfileActions, ProfileReducer } from '../../model/slice/ProfileSlice';
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
    const form = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    useInitialEffect(() => {
        if (id) dispatch(fetchProfileData(id));
    }, []);

    const onFirstnameChange = useCallback((value: string) => {
        dispatch(ProfileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onLastnameChange = useCallback((value: string) => {
        dispatch(ProfileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onAgeChange = useCallback((value: string) => {
        const numberRegex = /^\d+$/i;
        if (numberRegex.test(value) || value === '') {
            dispatch(ProfileActions.updateProfile({ age: Number(value) }));
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