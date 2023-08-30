import { HTMLAttributeAnchorTarget } from 'react';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/const/articleConsts';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { ArticleItemDeprecated } from './ArticleItemDeprecated';
import { ArticleItemRedesigned } from './ArticleItemRedesigned';

export interface ArticleItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleItem = (props: ArticleItemProps) => {
    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={<ArticleItemRedesigned {...props} />}
            off={<ArticleItemDeprecated {...props} />}
        />
    );
};
