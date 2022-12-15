import { Action } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { createReduxStore, StateSchema } from '@/app/providers/Redux';
import { ArticleSchema } from '@/entity/Article';
// eslint-disable-next-line carav-plugin/public-api-imports
import { ArticleReducer } from '@/entity/Article/model/slice/ArticleSlice';
import { Reducer } from 'react';
import { Provider } from 'react-redux';

export const StoreDecorator = (initialStore: DeepPartial<StateSchema> = {}) => (StoryComponent: Story) => {
    return (
        <Provider store={createReduxStore(initialStore as StateSchema, {
            article: ArticleReducer as Reducer<ArticleSchema | undefined, Action<any>>
        })}>
            <StoryComponent />
        </Provider>
    );
};