import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Controller,
    useFieldArray,
    useFormContext,
    useWatch,
} from 'react-hook-form';
import { ArticleBlockItem } from '../../model/types/article';
import { Button } from '@/shared/ui/Button';
import { BlockType } from '../../model/const/articleConsts';
import { HStack, VStack } from '@/shared/ui/Stack';
import { FormInput } from '@/shared/ui/Input/FormInput';
import { ArticleBlockEditorItem } from '../ArticleBlockEditorItem/ArticleBlockEditorItem';
import cls from './ArticlesBlocksEditor.module.scss';
import { TextArea } from '@/shared/ui/TextArea/TextArea';
import { Text } from '@/shared/ui/Text';

interface ArticlesBlocksEditorProps {
    className?: string;
}

export const ArticlesBlocksEditor = (props: ArticlesBlocksEditorProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        name: 'blocks',
        rules: {
            required: {
                value: true,
                message: 'Добавте хотя бы один блок',
            },
            minLength: {
                value: 1,
                message: 'Добавте хотя бы один блок',
            },
        },
    });

    const output = useWatch({
        name: 'blocks',
        control,
    });

    const handleAddBlock = (type: BlockType) => () => {
        if (type === BlockType.CODE) {
            const block: ArticleBlockItem<BlockType.CODE> = {
                id: String(fields.length),
                type,
                code: '',
            };

            append(block);
        }

        if (type === BlockType.IMAGE) {
            const block: ArticleBlockItem<BlockType.IMAGE> = {
                id: String(fields.length),
                type,
                title: '',
                src: '',
            };

            append(block);
        }
        if (type === BlockType.TEXT) {
            const block: ArticleBlockItem<BlockType.TEXT> = {
                id: String(fields.length),
                type,
                title: '',
                paragraphs: [''],
            };

            append(block);
        }
    };

    const renderArticleBlockForm = (type: BlockType, index: number) => {
        switch (type) {
            case BlockType.CODE: {
                return (
                    <Controller
                        name={`blocks.${index}.code`}
                        control={control}
                        render={({ field }) => {
                            return (
                                <TextArea
                                    label={t('fragment-koda')}
                                    placeholder={t('vvedite-kod')}
                                    className={cls.code}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            );
                        }}
                    />
                );
            }
            case BlockType.IMAGE: {
                return (
                    <VStack max>
                        <FormInput
                            {...register(`blocks.${index}.title`)}
                            label={t('zagolovok')}
                            placeholder={t('vvedite-zagolovok')}
                        />
                        <FormInput
                            {...register(`blocks.${index}.src`)}
                            label="URL"
                            placeholder={t('vvedite-url')}
                        />
                    </VStack>
                );
            }
            case BlockType.TEXT: {
                return (
                    <VStack max>
                        <FormInput
                            {...register(`blocks.${index}.title`)}
                            label={t('zagolovok')}
                            placeholder={t('vvedite-zagolovok')}
                        />
                        <FormInput
                            {...register(`blocks.${index}.paragraphs`)}
                            label={t('tekst')}
                            placeholder={t('vvedite-tekst')}
                        />
                    </VStack>
                );
            }
        }
    };

    const handleRemove = (index: number) => () => remove(index);

    return (
        <VStack
            max
            className={classNames('cls.ArticlesBlocksEditor', {}, [className])}
        >
            <HStack
                max
                justify="between"
                className={cls.buttons}
            >
                <Button
                    type="button"
                    theme="outline"
                    onClick={handleAddBlock(BlockType.CODE)}
                >
                    {t('dobavit-blok-koda')}
                </Button>
                <Button
                    type="button"
                    theme="outline"
                    onClick={handleAddBlock(BlockType.IMAGE)}
                >
                    {t('dobavit-illyustraciyu')}
                </Button>
                <Button
                    type="button"
                    theme="outline"
                    onClick={handleAddBlock(BlockType.TEXT)}
                >
                    {t('dobavit-tekstovyi-blok')}
                </Button>
            </HStack>

            <VStack
                className={cls.list}
                gap="8"
                max
            >
                {fields.length === 0 && (
                    <Text
                        error={!!errors.blocks?.root}
                        text={t('vy-eshe-ne-dobavili-blokov-v-svoyu-statyu')}
                        color="inverted"
                    />
                )}
                {fields.length > 0 &&
                    fields.map((block, index) => (
                        <ArticleBlockEditorItem
                            onRemove={handleRemove(index)}
                            key={block.id}
                        >
                            {output?.length > 0 &&
                                renderArticleBlockForm(
                                    output[index]?.type,
                                    index,
                                )}
                        </ArticleBlockEditorItem>
                    ))}
            </VStack>
        </VStack>
    );
};
