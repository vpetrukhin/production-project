import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Article } from '../../model/types/article';
import { ArticleSkeletonItem } from '../ArticleItem/ArticleSkeletonItem/ArticleSkeletonItem';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import cls from './ArticleList.module.scss';
import { ArticleView } from '../../model/const/articleConsts';
import { HStack } from '@/shared/ui/Stack';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view?: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

const getLoadingArticles = (view: ArticleView) => {
    const loadingArticles = new Array(9).fill(0).map((item, index) => ({
        ...item,
        id: `${index}`,
    }));

    return loadingArticles.map((item) => (
        <ArticleSkeletonItem
            view={view}
            key={item.id}
        />
    ));
};

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;

    return (
        <HStack
            gap="16"
            wrap="wrap"
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0
                ? articles.map((article) => (
                      <ArticleItem
                          article={article}
                          key={article.id}
                          view={view}
                          target={target}
                      />
                  ))
                : null}
            {isLoading && getLoadingArticles(view)}
        </HStack>
    );
};
