import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Article, ArticleTextBlock, ArticleView, BlockType } from '../../model/types/article';
import cls from './ArticleItem.module.scss';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticalTextBlockComponent } from '../ArticalTextBlockComponent/ArticalTextBlockComponent';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routesPaths } from 'shared/config/router/routerConfig';
import { ArticleSkeletonItem } from './ArticleSkeletonItem/ArticleSkeletonItem';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HTMLAttributeAnchorTarget } from 'react';

interface ArticleItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget
}

export const ArticleItem = (props: ArticleItemProps) => {
    const { className, article, view = ArticleView.SMALL, isLoading, target } = props;
    const {t} = useTranslation();
    const navigate = useNavigate();

    const onNavigateToArticle = () => {
        navigate(routesPaths.articles_details + article.id);
    };

    const types = <Text className={cls.type} text={article.type.join(', ')} />;
    const views = 
        <div className={cls.viewsWrapper}>
            <Text text={String(article.views)} />
            <EyeIcon />
        </div>;

    if (isLoading) {
        <ArticleSkeletonItem view={view} />;
    }

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(block => block.type === BlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <div className={cls.userWrapper}>
                            <Avatar size={33} src={article.user.avatar} />
                            <Text text={article.user.username} />
                        </div>
                        <Text text={article.createdAt} />
                    </div>
                    <Text title={article.title} />
                    {types}
                    <img className={cls.img} src={article.img} alt={article.title} />
                    <ArticalTextBlockComponent className={cls.text} block={textBlock} />
                    <div className={cls.footer}>
                        <AppLink
                            to={routesPaths.articles_details + article.id}
                            target={target}
                        >
                            <Button 
                                onClick={onNavigateToArticle}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Читать далее')}...
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            to={routesPaths.articles_details + article.id}
            className={classNames(cls.ArticleItem, {}, [className, cls[view]])}
            target={target}
        >
            <Card className={cls.card}>
                <div className={cls.imgWrapper}>
                    <img className={cls.img} src={article.img} alt={article.title} />
                    <Text className={cls.date} text={article.createdAt} />
                </div>
                <div className={cls.info}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={article.title} />
            </Card>
        </AppLink>
    );
};