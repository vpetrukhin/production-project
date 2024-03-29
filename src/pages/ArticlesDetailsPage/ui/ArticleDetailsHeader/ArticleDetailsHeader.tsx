import { useCanEdit } from '@/entity/Article';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getArticleEditPath,
    getArticlesPath,
} from '@/shared/config/const/router';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/deprecated/Button';
import { EditArticleButton } from '@/feutures/EditArticleButton';

interface ArticleDetailsHeaderProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsHeader = (props: ArticleDetailsHeaderProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();

    const navigateToArticleList = useCallback(() => {
        navigate(getArticlesPath());
    }, [navigate]);

    const navigateToEdit = useCallback(() => {
        if (id) navigate(getArticleEditPath(id));
    }, [id, navigate]);

    return (
        <HStack
            justify="between"
            max
            className={classNames('', {}, [className])}
        >
            <Button onClick={navigateToArticleList}>
                {'<- ' + t('К списку статей')}
            </Button>
            <EditArticleButton id={id} />
        </HStack>
    );
};
