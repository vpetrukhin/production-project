import { getCanEdit } from 'entity/Article';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routesPaths } from 'shared/config/router/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './ArticleDetailsHeader.module.scss';

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
        <div className={classNames(cls.ArticleDetailsHeader, {}, [className])}>
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
        </div>
    );
};