import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entity/Rating';
import { useUserInfo } from '@/entity/User';
import {
    useGetArticleRatingQuery,
    useRateArticleMutation,
} from '../../api/ArticleRatingApi';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeature } from '@/shared/lib/featureFlags';

interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

export const ArticleRating = (props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article');

    const user = useUserInfo();

    const { data, isLoading } = useGetArticleRatingQuery({
        articleId,
        userId: user?.id || '',
    });
    const [rateArticle] = useRateArticleMutation();

    const rate = data?.[0];

    const Skeleton = toggleFeature({
        name: 'isRedesignEnable',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return <Skeleton height={140} />;
    }

    const onAccept = (rating: number, feedback?: string) => {
        try {
            rateArticle({
                rate: rating,
                feedback,
                articleId,
                userId: user?.id || '',
            });
        } catch (e) {
            console.log(e);
        }
    };

    const onCancel = (rating: number) => {
        try {
            rateArticle({
                rate: rating,
                articleId,
                userId: user?.id || '',
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <RatingCard
            className={className}
            title={t('kak-vam-statya')}
            feedbackTitle={t('tekst-otzyva')}
            rate={rate?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
            hasFeedback
        />
    );
};
