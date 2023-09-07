import { useTranslation } from 'react-i18next';
import { useArticleData } from '@/entity/Article';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { EditArticleButton } from '@/feutures/EditArticleButton';

interface AdditionalArcticleInfoProps {
    articleId?: string;
    className?: string;
}

export const AdditionalArcticleInfo = (props: AdditionalArcticleInfoProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article');
    const article = useArticleData();

    if (!article) {
        // TODO: Обработать отсутствие статьи
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
