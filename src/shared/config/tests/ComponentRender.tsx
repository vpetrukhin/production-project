import { render } from '@testing-library/react';
import { ReducerList, StateSchema, StoreProvider } from '@/app/providers/Redux';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '@/shared/lib/i18n/i18nForTests';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducerList>,
}

export const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const { route = '/', initialState, asyncReducers } = options;

    return render(
        <StoreProvider initialState={initialState as StateSchema} asyncReducers={asyncReducers as ReducerList}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};