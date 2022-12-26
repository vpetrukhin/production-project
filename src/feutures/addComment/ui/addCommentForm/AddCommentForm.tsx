import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import { useAddCommentFormText } from '../../model/selectors/getAddCommentFormText';
import { AddCommentFormReducer, useAddCommentFormActions } from '../../model/slices/AddCommentFormSlice';
import cls from './AddCommentForm.module.scss';

interface addCommentFormProps {
    className?: string;
    onSendComment: (value: string) => void;
}

export const AddCommentForm = (props: addCommentFormProps) => {
    const { className, onSendComment } = props;
    const {t} = useTranslation();
    const {setText} = useAddCommentFormActions();
    const commentText = useAddCommentFormText();

    const onCommentTextChange = (value: string) => {
        setText(value);
    };
    
    const onSendCommentHandler = () => {
        if (commentText) {
            onSendComment(commentText);
            setText('');
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
                    value={commentText || ''}
                    onChange={onCommentTextChange}
                />
                <Button theme={'outline'} onClick={onSendCommentHandler}>{t('Отправить')}</Button>
            </HStack>
        </DynamicModule>
    );
};