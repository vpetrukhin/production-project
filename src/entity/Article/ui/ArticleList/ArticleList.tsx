import { Article, ArticleView } from '../../model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleSkeletonItem } from '../ArticleItem/ArticleSkeletonItem/ArticleSkeletonItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view?: ArticleView;
    isLoading?: boolean;
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
    const { className, articles, view = ArticleView.SMALL, isLoading } = props;

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 
                ? (articles.map(article => (
                    <ArticleItem
                        article={article}
                        key={article.id}
                        view={view}
                    />)
                ))
                : null
            }
            {isLoading && getLoadingArticles(view)}
        </div>
    );
};