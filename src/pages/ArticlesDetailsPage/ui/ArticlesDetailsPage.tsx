import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ArticleRating } from '@/feutures/ArticleRating';
import { ArticleRecomendationList } from '@/feutures/ArticleRecomendationList';
import { ArticleDetails } from '@/entity/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetailsHeader } from './ArticleDetailsHeader/ArticleDetailsHeader';
import cls from './ArticlesDetailsPage.module.scss';
import { ArticleDetailsComments } from './ArticleDetilsComments/ArticleDetailsComments';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { StickyContentLayout } from '@/shared/layout/StickyContentLayout/StickyContentLayout';
import { DetailsContainer } from './DetailsContainer/DetailsContainer';
import { AdditionalArcticleInfo } from '@/widgets/AdditionalArticleInfo';
import { Card } from '@/shared/ui/redesigned/Card';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article');

    if (!id)
        return (
            <Text
                error
                text={t('nekorrektnyi-url-stati')}
            />
        );

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <StickyContentLayout
                    right={
                        <Card padding="24">
                            <AdditionalArcticleInfo
                                className={cls.additionalInfo}
                                articleId={id}
                            />
                        </Card>
                    }
                >
                    <Page
                        className={classNames(cls.ArticlesDetailsPage, {}, [
                            className,
                        ])}
                    >
                        <VStack
                            gap="16"
                            max
                            align="start"
                        >
                            <DetailsContainer />
                            <ArticleRating articleId={id} />
                            <ArticleRecomendationList
                                className={cls.recomendations}
                            />
                            <ArticleDetailsComments id={id} />
                        </VStack>
                    </Page>
                </StickyContentLayout>
            }
            off={
                <Page
                    className={classNames(cls.ArticlesDetailsPage, {}, [
                        className,
                    ])}
                >
                    <VStack
                        gap="16"
                        max
                        align="start"
                    >
                        <ArticleDetailsHeader id={id} />
                        <ArticleDetails articleId={id} />
                        <ArticleRating articleId={id} />
                        <ArticleRecomendationList
                            className={cls.recomendations}
                        />
                        <ArticleDetailsComments id={id} />
                    </VStack>
                </Page>
            }
        />
    );
};

export default memo(ArticlesDetailsPage);
