import { Routes } from '@/shared/config/const/router';
import { useAppRoute } from '@/shared/lib/route/useAppRoute';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { ReactElement } from 'react';

export function useToolbar() {
    const appRoute = useAppRoute();

    const toolbarConfig: RecordOptional<Routes, ReactElement> = {
        [Routes.ARTICLES]: <ScrollToolbar />,
        [Routes.ARTICLEDETAILS]: <ScrollToolbar />,
    };

    return toolbarConfig[appRoute];
}
