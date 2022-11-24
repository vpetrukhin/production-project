import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ProfileActions, getProfileReadonly, ValidateErrors, getProfileValidateError, getProfileForm } from 'entity/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './EditableProfileCardHeader.module.scss';
import { updateProfileData } from 'entity/Profile/model/services/updateProfileData/updateProfileData';
import { Text } from 'shared/ui/Text/Text';
import { getUserInfo } from 'entity/User';
import { HStack } from 'shared/ui/Stack';

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
                                >
                                    {t('Редактировать')}
                                </Button>
                            )
                            : (
                                <HStack gap='8'>
                                    <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>{t('Сохранить')}</Button>
                                    <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancel}>{t('Отменить')}</Button>
                                </HStack>
                            )
                        }
                    </>
                )}
                
            </HStack>
            {validateErrors && validateErrors.length > 0 && validateErrors?.map(err => (
                <Text key={err} error text={validateMessages[err]} />
            ))}
        </>
    );
};