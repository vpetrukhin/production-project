import { ArticleList } from 'entity/Article';
import { ArticleView } from 'entity/Article/model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArtilclesPageProps {
    className?: string;
}



const ArtilclesPage = (props: ArtilclesPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ArtilclesPage, {}, [className])}>
            <ArticleList
                articles={[]}
                view={ArticleView.BIG}
            />
        </div>
    );
};

export default memo(ArtilclesPage);