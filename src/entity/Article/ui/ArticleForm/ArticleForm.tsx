import { useTranslation } from 'react-i18next';
import { FormProvider, useController, useForm } from 'react-hook-form';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FormInput } from '@/shared/ui/Input/FormInput';
import { URL_REGEXP } from '@/shared/config/const/RegExps';
import { Listbox } from '@/shared/ui/Popups';
import { ListBoxItem } from '@/shared/ui/Popups/Listbox/Listbox';
import { Button } from '@/shared/ui/Button';
import { ArticleType, ArticleTypeRus } from '../../model/const/articleConsts';
import { ArticleBlock } from '../../model/types/article';
import { ArticlesBlocksEditor } from '../ArticlesBlocksEditor/ArticlesBlocksEditor';
import { VStack } from '@/shared/ui/Stack';

export interface ArticleFormFields {
    title: string;
    subtitle: string;
    img: string;
    type: ArticleType;
    blocks: ArticleBlock[];
}

interface ArticleFormProps {
    className?: string;
    mode?: 'create' | 'edit';
    defaultValues?: Partial<ArticleFormFields>;
    onSubmit: (data: ArticleFormFields) => void;
}

/**
 * @todo вынести в компонент
 */
const ArticleTypeItems: ListBoxItem<ArticleType>[] = [
    {
        content: ArticleTypeRus.ALL,
        value: ArticleType.All,
    },
    {
        content: ArticleTypeRus.ECONOMY,
        value: ArticleType.ECONOMY,
    },
    {
        content: ArticleTypeRus.IT,
        value: ArticleType.IT,
    },
    {
        content: ArticleTypeRus.SCIENCE,
        value: ArticleType.SCIENCE,
    },
];

export const ArticleForm = (props: ArticleFormProps) => {
    const { className, mode = 'create', defaultValues, onSubmit } = props;
    const { t } = useTranslation();

    const methods = useForm<ArticleFormFields>({
        defaultValues,
    });

    const {
        handleSubmit,
        register,
        setValue,
        control,
        formState: { errors },
        clearErrors,
    } = methods;

    const {
        field,
        fieldState: { error: typeError },
    } = useController({
        name: 'type',
        control,
        rules: {
            required: {
                value: true,
                message: 'Введите тип статьи',
            },
        },
    });

    const handleTypeChange = (value: ArticleType) => {
        field.onChange();
        setValue('type', value);
        clearErrors('type');
    };

    return (
        <div className={classNames('cls.ArticleForm', {}, [className])}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack
                        gap="8"
                        align="start"
                    >
                        <FormInput
                            label={t('zagolovok')}
                            error={errors.title?.message}
                            {...register('title', {
                                required: 'Введите заголовок...',
                            })}
                        />
                        <FormInput
                            label={t('podzagolovok')}
                            error={errors.subtitle?.message}
                            {...register('subtitle', {
                                max: {
                                    value: 40,
                                    message: 'Слишком длинный подзаголовок...',
                                },
                            })}
                        />
                        <FormInput
                            label={t('oblozhka-stati')}
                            error={errors.img?.message}
                            {...register('img', {
                                required: {
                                    value: true,
                                    message: 'Введите URL',
                                },
                                pattern: {
                                    value: URL_REGEXP,
                                    message: 'Не валидный URL картинки',
                                },
                            })}
                        />
                        <Listbox
                            label={t('tip-stati')}
                            value={ArticleTypeRus[field.value] as ArticleType}
                            defaultValue={t('tip-ne-vybran')}
                            onChange={handleTypeChange}
                            items={ArticleTypeItems}
                            error={typeError?.message}
                        />

                        <ArticlesBlocksEditor />

                        <Button
                            type="submit"
                            max
                            theme="background"
                        >
                            {mode === 'create'
                                ? t('create-article')
                                : t('sokhranit-izmeneniya')}
                        </Button>
                    </VStack>
                </form>
            </FormProvider>
        </div>
    );
};
