import { ArticleList } from '@/entity/Article';
import { useGetArticleRecomendationListQuery } from '../../api/ArticleRecomendationList';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/deprecated/Text';

interface ArticleRecomendationListProps {
    className?: string;
}

export const ArticleRecomendationList = (
    props: ArticleRecomendationListProps,
) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const {
        isLoading,
        data: articles,
        error,
    } = useGetArticleRecomendationListQuery(4);

    if (error) {
        return null;
    }

    return (
        <>
            <Text title={t('rekomendacii')} />
            <ArticleList
                articles={articles ?? []}
                isLoading={isLoading}
                className={className}
                target={'_blank'}
            />
        </>
    );
};
