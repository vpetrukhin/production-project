import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticlesViewSelector } from '@/feutures/ArticlesViewSelector';
import { useArticleFilters } from '../lib/useArticleFilters';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = (props: ViewSelectorContainerProps) => {
    const { view, onChangeView } = useArticleFilters();

    return (
        <ArticlesViewSelector
            view={view}
            onViewChange={onChangeView}
        />
    );
};
