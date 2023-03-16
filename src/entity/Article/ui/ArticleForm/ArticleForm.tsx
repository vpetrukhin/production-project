import { useTranslation } from 'react-i18next';
import { FormProvider, useController, useForm } from 'react-hook-form';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FormInput } from '@/shared/ui/Input/FormInput';
import { URL_REGEXP } from '@/shared/config/const/RegExps';
import { Button } from '@/shared/ui/Button';
import {
    ArticleType,
    ArticleTypeRus,
    BlockType,
} from '../../model/const/articleConsts';
import { Article, ArticleFormFields } from '../../model/types/article';
import { ArticlesBlocksEditor } from '../ArticlesBlocksEditor/ArticlesBlocksEditor';
import { VStack } from '@/shared/ui/Stack';
import { useCallback, useEffect } from 'react';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useArticleData } from '../../model/selectors/getArticle/getArticle';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import {
    ArticleReducer,
    useArticleAction,
} from '../../model/slice/ArticleSlice';
import { parseArticleTextBlocksToString } from '../../model/lib/helpers/parseArticleBlocks';
import { ArticleTypeSelect } from '../ArticleTypeSelect/ArticleTypeSelect';

interface ArticleFormProps {
    className?: string;
    mode?: 'create' | 'edit';
    articleId?: string;
    /**
     * Необходимо разобрать параграфы на массив
     */
    onFormSubmit: (data: ArticleFormFields) => void;
}

export const ArticleForm = (props: ArticleFormProps) => {
    const { className, mode = 'create', articleId, onFormSubmit } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const article = useArticleData();
    const { resetArticle } = useArticleAction();

    useInitialEffect(() => {
        if (mode === 'edit' && articleId && article === undefined) {
            dispatch(fetchArticleById(articleId));
        }

        if (mode === 'create') {
            resetArticle();
        }
    }, []);

    const methods = useForm<ArticleFormFields>();

    const {
        handleSubmit,
        register,
        setValue,
        control,
        formState: { errors },
        clearErrors,
        reset,
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

    const setDefaultValues = useCallback(
        (article: Article) => {
            const defaultValues: ArticleFormFields = {
                blocks: [],
                img: '',
                subtitle: '',
                title: '',
                type: ArticleType.All,
            };

            const keys: Array<keyof ArticleFormFields> = Object.keys(
                defaultValues,
            ) as Array<keyof ArticleFormFields>;

            keys.forEach((key) => {
                if (key === 'blocks') {
                    const newBlocks = parseArticleTextBlocksToString(
                        article.blocks,
                    );

                    setValue(key, newBlocks);
                } else if (key === 'type') {
                    setValue(key, article.type[0]);
                } else {
                    setValue(key, article[key]);
                }
            });
        },
        [setValue],
    );

    useEffect(() => {
        if (article && mode !== 'create') {
            setDefaultValues(article);
        }
    }, [article, mode, setDefaultValues]);

    const handleTypeChange = (value: ArticleType) => {
        field.onChange();
        setValue('type', value);
        clearErrors('type');
    };

    const onSubmit = (data: ArticleFormFields) => {
        onFormSubmit(data);
    };

    return (
        <DynamicModule
            reducers={{ article: ArticleReducer }}
            removeAfterUnmount={mode === 'create'}
        >
            <VStack
                max
                className={className}
            >
                <FormProvider {...methods}>
                    <form
                        style={{ width: '100%' }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <VStack
                            gap="8"
                            align="start"
                            max
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
                                        message:
                                            'Слишком длинный подзаголовок...',
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
                            <ArticleTypeSelect
                                value={
                                    ArticleTypeRus[field.value] as ArticleType
                                }
                                onChange={handleTypeChange}
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
            </VStack>
        </DynamicModule>
    );
};
