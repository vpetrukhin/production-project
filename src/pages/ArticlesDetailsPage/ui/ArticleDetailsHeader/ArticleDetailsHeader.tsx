import { getCanEdit } from '@/entity/Article';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { routesPaths } from '@/shared/config/const/router';

interface ArticleDetailsHeaderProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsHeader = (props: ArticleDetailsHeaderProps) => {
    const { className, id } = props;
    const {t} = useTranslation('article');
    const navigate = useNavigate();

    const canEdit = useSelector(getCanEdit);
    
    const navigateToArticleList = useCallback(() => {
        navigate(routesPaths.articles);
    }, [navigate]);

    const navigateToEdit = useCallback(() => {
        navigate(routesPaths.articles_details + id + '/edit');
    }, [id, navigate]);

    return (
        <HStack justify='between' max className={classNames('', {}, [className])}>
            <Button
                onClick={navigateToArticleList}
            >
                {'<- ' + t('К списку статей')}
            </Button>
            {canEdit && (
                <Button
                    onClick={navigateToEdit}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
};