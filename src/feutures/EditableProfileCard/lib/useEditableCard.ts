import { useUserInfo } from '@/entity/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import { useProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { useProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { updateProfileData } from '../model/services/updateProfileData/updateProfileData';
import { useProfileActions } from '../model/slice/ProfileSlice';

export function useEditableCard() {
    const dispatch = useAppDispatch();
    const { onCancelEdit, onStartEdit } = useProfileActions();
    const authData = useUserInfo();
    const formData = useProfileForm();
    const validateErrors = useProfileValidateErrors();
    const canEdit = authData?.id === formData?.id;

    const onEdit = useCallback(() => {
        onStartEdit();
    }, [onStartEdit]);

    const onCancel = useCallback(() => {
        onCancelEdit();
    }, [onCancelEdit]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);


    return { canEdit, onEdit, onCancel, onSave }
}