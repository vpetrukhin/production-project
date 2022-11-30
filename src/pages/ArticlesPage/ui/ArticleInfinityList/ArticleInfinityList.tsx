import { useSelector } from 'react-redux';
import { ArticleList } from 'entity/Article';
import { getArticlesLoading, getArticlesView } from '../../model/selectors/ArticlesPageSelectors/ArticlesPageSelectors';
import { getArticles } from '../../model/slices/ArticlesSlice';

interface ArticleInfinityListProps {
    className?: string;
}

export const ArticleInfinityList = (props: ArticleInfinityListProps) => {
    const { className } = props;

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesLoading);
    const view = useSelector(getArticlesView);

    return (
        <ArticleList
            articles={articles}
            view={view}
            isLoading={isLoading}
            className={className}
        />
    );
};