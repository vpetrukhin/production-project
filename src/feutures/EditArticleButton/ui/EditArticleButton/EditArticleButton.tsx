import { useTranslation } from 'react-i18next';
import { toggleFeature } from '@/shared/lib/featureFlags';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { getArticleEditPath } from '@/shared/config/const/router';
import { useCanEdit } from '@/entity/Article';

interface EditArticleButtonProps {
    id?: string;
    className?: string;
}

export const EditArticleButton = (props: EditArticleButtonProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useCanEdit();

    const navigateToEdit = useCallback(() => {
        if (id) navigate(getArticleEditPath(id));
    }, [id, navigate]);

    const Button = toggleFeature({
        name: 'isRedesignEnable',
        on: () => ButtonRedesigned,
        off: () => ButtonDeprecated,
    });

    if (!canEdit) {
        return null;
    }

    return <Button onClick={navigateToEdit}>{t('Редактировать')}</Button>;
};
