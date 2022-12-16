import { Action } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { createReduxStore, StateSchema } from '@/app/providers/Redux';
// eslint-disable-next-line carav-plugin/layer-imports
import { ArticleSchema } from '@/entity/Article';
// eslint-disable-next-line carav-plugin/layer-imports
import { ArticleReducer } from '@/entity/Article/testing';
import { Reducer } from 'react';
import { Provider } from 'react-redux';

export const StoreDecorator = (initialStore: DeepPartial<StateSchema> = {}) => (StoryComponent: Story) => {
    return (
        <Provider store={createReduxStore(initialStore as StateSchema, {
            article: ArticleReducer as Reducer<ArticleSchema | undefined, Action>
        })}>
            <StoryComponent />
        </Provider>
    );
};