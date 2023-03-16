import {
    ArticleBody,
    ArticleForm,
    ArticleFormFields,
    parseArticleTextBlocksToArray,
    updateArticle,
} from '@/entity/Article';

interface EditArticleFormProps {
    className?: string;
    articleId: string;
}

export const EditArticleForm = (props: EditArticleFormProps) => {
    const { className, articleId } = props;

    const handleEditForm = (data: ArticleFormFields) => {
        const { blocks, img, subtitle, title, type } = data;

        const body: Partial<ArticleBody> = {
            title,
            subtitle,
            img,
            type: [type],
            blocks: parseArticleTextBlocksToArray(blocks),
        };

        updateArticle(articleId, body);
        console.log(data);
    };

    return (
        <ArticleForm
            className={className}
            onFormSubmit={handleEditForm}
            mode={'edit'}
            articleId={articleId}
        />
    );
};
