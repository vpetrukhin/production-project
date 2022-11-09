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

const loadingArticles = new Array(8).fill(0).map((item, index) => ({
    ...item,
    id: `${index}`
}));

export const ArticleList = (props: ArticleListProps) => {
    const { className, articles, view = ArticleView.SMALL, isLoading } = props;

    if (isLoading) {
        
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {loadingArticles.map((item) => (
                    <ArticleSkeletonItem view={view} key={item.id} />
                ))}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 
                ? articles.map(article => (
                    <ArticleItem
                        article={article}
                        key={article.id}
                        view={view}
                    />
                ))
                : null
            }
        </div>
    );
};