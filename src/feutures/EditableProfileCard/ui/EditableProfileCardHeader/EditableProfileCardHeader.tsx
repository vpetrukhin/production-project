import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './EditableProfileCardHeader.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { getUserInfo } from '@/entity/User';
import { HStack } from '@/shared/ui/Stack';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateError } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ProfileActions } from '../../model/slice/ProfileSlice';
import { ValidateErrors } from '../../model/const/editableProfileCardConsts';


interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
    const { className } = props;
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserInfo);
    const formData = useSelector(getProfileForm);
    const canEdit = authData?.id === formData?.id;
    const validateErrors = useSelector(getProfileValidateError);

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
        dispatch(ProfileActions.onStartEdit());
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(ProfileActions.onCancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <>
            <HStack justify='between' gap='8' className={classNames(cls.Header, {}, [className])}>
                <Text title={t('Профиль')} />
                {canEdit && (
                    <>
                        {readonly
                            ? (
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onEdit}
                                    data-testid='EditableProfileCardHeader.editButton'
                                >
                                    {t('Редактировать')}
                                </Button>
                            )
                            : (
                                <HStack gap='8'>
                                    <Button
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSave}
                                        data-testid='EditableProfileCardHeader.saveButton'
                                    >
                                        {t('Сохранить')}
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={onCancel}
                                        data-testid='EditableProfileCardHeader.cancelButton'
                                    >
                                        {t('Отменить')}
                                    </Button>
                                </HStack>
                            )
                        }
                    </>
                )}
                
            </HStack>
            {validateErrors && validateErrors.length > 0 && validateErrors?.map(err => (
                <Text data-testid='EditableProfileCardHeader.Error' key={err} error text={validateMessages[err]} />
            ))}
        </>
    );
};