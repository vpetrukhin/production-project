import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { useAddCommentFormText } from '../../model/selectors/getAddCommentFormText';
import {
    AddCommentFormReducer,
    useAddCommentFormActions,
} from '../../model/slices/AddCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/Stack';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface addCommentFormProps {
    className?: string;
    onSendComment: (value: string) => void;
}

export const AddCommentForm = (props: addCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const { setText } = useAddCommentFormActions();
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
        <DynamicModule
            reducers={{
                addCommentFrom: AddCommentFormReducer,
            }}
        >
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <Card
                        padding="24"
                        max
                    >
                        <HStack
                            justify="between"
                            max
                            gap="8"
                            className={classNames(
                                cls.AddCommentFormRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <Input
                                className={cls.input}
                                placeholder={t('Введите текст комментария')}
                                value={commentText || ''}
                                onChange={onCommentTextChange}
                            />
                            <Button onClick={onSendCommentHandler}>
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        justify="between"
                        max
                        gap="8"
                        className={classNames(cls.AddCommentForm, {}, [
                            className,
                        ])}
                    >
                        <InputDeprecated
                            className={cls.input}
                            placeholder={t('Введите текст комментария')}
                            value={commentText || ''}
                            onChange={onCommentTextChange}
                        />
                        <ButtonDeprecated
                            theme={'outline'}
                            onClick={onSendCommentHandler}
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStack>
                }
            />
        </DynamicModule>
    );
};
