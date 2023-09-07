import { ArticleList } from '@/entity/Article';
import { useGetArticleRecomendationListQuery } from '../../api/ArticleRecomendationList';
import { useTranslation } from 'react-i18next';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Text } from '@/shared/ui/redesigned/Text';

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
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={<Text title={t('rekomendacii')} />}
                off={<TextDeprecated title={t('rekomendacii')} />}
            />
            <ArticleList
                articles={articles ?? []}
                isLoading={isLoading}
                className={className}
                target={'_blank'}
            />
        </>
    );
};
