import { ArticleDetails } from '@/entity/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export const DetailsContainer = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    return (
        <Card
            padding="24"
            max
        >
            <ArticleDetails articleId={id} />
        </Card>
    );
};
