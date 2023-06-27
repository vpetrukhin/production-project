import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ArticleRating } from '@/feutures/ArticleRating';
import { ArticleRecomendationList } from '@/feutures/ArticleRecomendationList';
import { ArticleDetails } from '@/entity/Article';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { ArticleDetailsHeader } from './ArticleDetailsHeader/ArticleDetailsHeader';
import cls from './ArticlesDetailsPage.module.scss';
import { ArticleDetailsComments } from './ArticleDetilsComments/ArticleDetailsComments';
import { toggleFeature } from '@/shared/lib/featureFlags';
import { Card } from '@/shared/ui/Card';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const {t} = useTranslation('article');

    if (!id) return <Text error text={t('nekorrektnyi-url-stati')} />;

    const rating = toggleFeature({
        name: 'isArticleRatingCardEnabled',
        on: () => <ArticleRating articleId={id} />,
        off: () => <Card><Text text={t('reiting-skoro-budet-dostupen')} /></Card>
    })

    return (
        <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <VStack gap='16' max align='start'>
                <ArticleDetailsHeader id={id} />
                <ArticleDetails articleId={id} />
                {rating}
                <ArticleRecomendationList className={cls.recomendations} />
                <ArticleDetailsComments id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ArticlesDetailsPage);