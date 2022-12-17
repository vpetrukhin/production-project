import { Story } from '@storybook/react';
import { createReduxStore, StateSchema } from '@/app/providers/Redux';
// eslint-disable-next-line carav-plugin/layer-imports
import { ArticleReducer } from '@/entity/Article/testing';
import { Provider } from 'react-redux';
import { ReducerList } from '@/app/providers/Redux';

const ReducersList: ReducerList = {
    article: ArticleReducer
};

export const StoreDecorator = (initialStore: DeepPartial<StateSchema> = {}) => (StoryComponent: Story) => {
    return (
        <Provider store={createReduxStore(initialStore as StateSchema, ReducersList)}>
            <StoryComponent />
        </Provider>
    );
};