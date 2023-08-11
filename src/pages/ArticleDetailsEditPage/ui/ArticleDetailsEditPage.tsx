import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsEditPage.module.scss';
import { EditArticleForm } from '@/feutures/EditArticleForm';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { getArticleDetailsPath } from '@/shared/config/const/router';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { HStack } from '@/shared/ui/deprecated/Stack';

interface ArticleDetailsEditPageProps {
    className?: string;
}

const ArticleDetailsEditPage = (props: ArticleDetailsEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Text
                error
                text={t('nekorrektnyi-url-stati')}
            />
        );
    }

    return (
        <Page
            className={classNames(cls.ArticleDetailsEditPage, {}, [className])}
        >
            <HStack
                max
                align="center"
                justify="between"
            >
                <Text
                    title={t('edit-article')}
                    color={'inverted'}
                    className={cls.title}
                />
                <AppLink to={getArticleDetailsPath(id)}>
                    {t('obratno-k-state')}
                </AppLink>
            </HStack>
            <EditArticleForm articleId={id} />
        </Page>
    );
};

export default ArticleDetailsEditPage;
