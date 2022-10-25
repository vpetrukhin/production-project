import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ProfileActions, getProfileReadonly } from 'entity/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
    const { className } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(ProfileActions.setReadonly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(ProfileActions.setReadonly(true));
    }, [dispatch]);

    // const onSave = useCallback(() => {
    //     // save
    // }, [dispatch]);

    return (
        <div className={classNames(cls.Header, {}, [className])}>
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
                    <>
                        <Button theme={ButtonTheme.OUTLINE}>{t('Сохранить')}</Button>
                        <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancel}>{t('Отменить')}</Button>
                    </>
                )
            }
        </div>
    );
};