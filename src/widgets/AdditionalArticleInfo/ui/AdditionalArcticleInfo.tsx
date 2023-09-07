import { useTranslation } from 'react-i18next';
import { useArticleData, useArticleIsLoading } from '@/entity/Article';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { EditArticleButton } from '@/feutures/EditArticleButton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface AdditionalArcticleInfoProps {
    articleId?: string;
    className?: string;
}

export const AdditionalArcticleInfo = (props: AdditionalArcticleInfoProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article');
    const article = useArticleData();
    const isLoading = useArticleIsLoading();

    if (isLoading) {
        return (
            <VStack
                gap={'32'}
                className={className}
                align="start"
            >
                <HStack
                    max
                    justify="between"
                >
                    <Skeleton
                        width={'25%'}
                        height={32}
                    />
                    <Skeleton
                        width={'25%'}
                        height={30}
                    />
                </HStack>
                <Skeleton
                    width={'50%'}
                    height={28}
                />
                <Skeleton
                    width={'50%'}
                    height={25}
                />
            </VStack>
        );
    }

    if (!article) {
        return null;
    }

    return (
        <VStack
            gap={'32'}
            className={className}
            align="start"
        >
            <HStack
                max
                justify="between"
            >
                <Avatar
                    src={article.user.avatar}
                    size={32}
                    userName={article.user.username}
                />
                <Text text={article.createdAt} />
            </HStack>
            <EditArticleButton id={articleId} />
            <Text text={t('views', { count: article.views })} />
        </VStack>
    );
};
