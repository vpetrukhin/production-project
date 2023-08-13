import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useUserInfo } from '@/entity/User';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { useProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { useProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { useProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { useProfileActions } from '../../model/slice/ProfileSlice';
import { ValidateErrors } from '../../model/const/editableProfileCardConsts';
import { Button } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = (
    props: EditableProfileCardHeaderProps,
) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const { onCancelEdit, onStartEdit } = useProfileActions();
    const readonly = useProfileReadonly();
    const authData = useUserInfo();
    const formData = useProfileForm();
    const validateErrors = useProfileValidateErrors();
    const canEdit = authData?.id === formData?.id;

    const validateMessages = {
        [ValidateErrors.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateErrors.INCORRECT_AVATAR]: t('Некорректный аватар'),
        [ValidateErrors.INCORRECT_CITY]: t('Некорректный город'),
        [ValidateErrors.INCORRECT_FIRSTNAME]: t('Некорректное имя'),
        [ValidateErrors.INCORRECT_DATA]: t('Некорректный объект профиля'),
        [ValidateErrors.INCORRECT_LASTNAME]: t('Некорректная фамилия'),
        [ValidateErrors.INCORRECT_USERNAME]: t('Некорректное имя пользователя'),
        [ValidateErrors.SERVER_ERROR]: t('Ошибка сервера'),
    };

    const onEdit = useCallback(() => {
        onStartEdit();
    }, [onStartEdit]);

    const onCancel = useCallback(() => {
        onCancelEdit();
    }, [onCancelEdit]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <>
            <HStack
                max
                justify="between"
                gap="8"
                className={className}
            >
                <Text
                    title={t('Профиль')}
                    color="inverted"
                />
                {canEdit && (
                    <>
                        {readonly ? (
                            <Button
                                theme={'outline'}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.editButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    theme={'outline'}
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.saveButton"
                                >
                                    {t('Сохранить')}
                                </Button>
                                <Button
                                    theme={'outline_red'}
                                    onClick={onCancel}
                                    data-testid="EditableProfileCardHeader.cancelButton"
                                >
                                    {t('Отменить')}
                                </Button>
                            </HStack>
                        )}
                    </>
                )}
            </HStack>
            {validateErrors &&
                validateErrors.length > 0 &&
                validateErrors?.map((err) => (
                    <Text
                        data-testid="EditableProfileCardHeader.Error"
                        key={err}
                        error
                        text={validateMessages[err]}
                    />
                ))}
        </>
    );
};
