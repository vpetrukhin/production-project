import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule } from 'shared/lib/ui/DynamicModule/DynamicModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { HStack } from 'shared/ui/Stack';
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormText';
import { AddCommentFormActions, AddCommentFormReducer } from '../../model/slices/AddCommentFormSlice';
import cls from './AddCommentForm.module.scss';

interface addCommentFormProps {
    className?: string;
    onSendComment: (value: string) => void;
}

export const AddCommentForm = (props: addCommentFormProps) => {
    const { className, onSendComment } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const commentText = useSelector(getAddCommentFormText);

    const onCommentTextChange = (value: string) => {
        dispatch(AddCommentFormActions.setText(value));
    };
    
    const onSendCommentHandler = () => {
        if (commentText) {
            onSendComment(commentText);
            dispatch(AddCommentFormActions.setText(''));
        }
    };

    return (
        <DynamicModule reducers={{
            addCommentFrom: AddCommentFormReducer
        }}>
            <HStack
                justify='between'
                max
                gap='8'
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={commentText}
                    onChange={onCommentTextChange}
                />
                <Button theme={ButtonTheme.OUTLINE} onClick={onSendCommentHandler}>{t('Отправить')}</Button>
            </HStack>
        </DynamicModule>
    );
};