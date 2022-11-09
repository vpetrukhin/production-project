import { ArticleList } from 'entity/Article';
import { ArticleView } from 'entity/Article/model/types/article';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule } from 'shared/lib/DynamicModule/DynamicModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { getArticlesLoading, getArticlesView } from '../model/selectors/ArticlesPageSelectors';
import { fetchArticles } from '../model/services/fetchArticles';
import { ArticlesReducer, getArticles } from '../model/slices/ArticlesSlice';
import cls from './ArticlesPage.module.scss';

interface ArtilclesPageProps {
    className?: string;
}

const ArtilclesPage = (props: ArtilclesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesLoading);
    // const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesView);

    useInitialEffect(() => {
        dispatch(fetchArticles());
    });

    return (
        <DynamicModule reducers={{
            articlesPage: ArticlesReducer
        }}>
            <div className={classNames(cls.ArtilclesPage, {}, [className])}>
                <ArticleList
                    articles={articles}
                    view={ArticleView.SMALL}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModule>
    );
};

export default memo(ArtilclesPage);