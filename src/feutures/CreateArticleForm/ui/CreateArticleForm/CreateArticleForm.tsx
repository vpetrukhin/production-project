import { useTranslation } from 'react-i18next';
import {
    Article,
    ArticleBody,
    ArticleForm,
    ArticleFormFields,
    createArticle,
    parseArticleTextBlocksToArray,
} from '@/entity/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useUserInfo } from '@/entity/User';
import { useNavigate } from 'react-router-dom';
import {
    getArticleDetailsPath,
    getArticlesPath,
    getMainPath,
} from '@/shared/config/const/router';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';
// import cls from './CreateArticleForm.module.scss';

interface CreateArticleFormProps {
    className?: string;
}

export const CreateArticleForm = (props: CreateArticleFormProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const navigate = useNavigate();

    const user = useUserInfo();

    if (!user) {
        navigate(getMainPath());
        return null;
    }

    const handleFormSubmit = async (data: ArticleFormFields) => {
        const { blocks, img, subtitle, title, type } = data;

        const currentDate = new Date();

        const body: ArticleBody = {
            title,
            subtitle,
            createdAt: `${currentDate.getDate()}.${
                currentDate.getMonth() + 1
            }.${currentDate.getFullYear()}`,
            img,
            userId: user?.id || '',
            type: [type],
            views: Math.floor(Math.random() * 1000),
            blocks: parseArticleTextBlocksToArray(blocks),
        };

        try {
            await createArticle(body);

            navigate(getArticlesPath());
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <VStack
            gap="16"
            className={classNames('cls.CreateArticleForm', {}, [className])}
        >
            <Text
                title={t('sozdanie-stati')}
                color="inverted"
            />
            <ArticleForm
                onFormSubmit={handleFormSubmit}
                mode="create"
            />
        </VStack>
    );
};
