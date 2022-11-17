import { Article, ArticleView } from '../../model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleSkeletonItem } from '../ArticleItem/ArticleSkeletonItem/ArticleSkeletonItem';
import { HTMLAttributeAnchorTarget } from 'react';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view?: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget
}

const getLoadingArticles = (view: ArticleView) => {
    const loadingArticles = new Array(9).fill(0).map((item, index) => ({
        ...item,
        id: `${index}`
    }));

    return loadingArticles.map((item) => (
        <ArticleSkeletonItem view={view} key={item.id} />
    ));
};

export const ArticleList = (props: ArticleListProps) => {
    const { className, articles, view = ArticleView.SMALL, isLoading, target } = props;

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 
                ? (articles.map(article => (
                    <ArticleItem
                        article={article}
                        key={article.id}
                        view={view}
                        target={target}
                    />)
                ))
                : null
            }
            {isLoading && getLoadingArticles(view)}
        </div>
    );
};