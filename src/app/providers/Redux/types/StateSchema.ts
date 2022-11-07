import { LoginSchema } from 'feutures/AuthByUserName';
import { UserSchema } from 'entity/User';
import { Action, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entity/Profile';
import { AxiosInstance } from 'axios';
import { To, NavigateOptions } from 'react-router-dom';
import { createReduxStore } from '..';
import { ArticleSchema } from 'entity/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailsPage';

export interface AsyncStateSchema {
    login?: LoginSchema | undefined,
    profile?: ProfileSchema | undefined,
    article?: ArticleSchema | undefined,
    articleDetailsComments?: ArticleDetailsCommentsSchema | undefined,
}
export interface StateSchema extends AsyncStateSchema {
    user: UserSchema,
}

export type StateSchemaKeys = keyof StateSchema;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: Action) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface StateWithReducerManager extends EnhancedStore<StateSchema, any> {
    reducerManager: ReducerManager;
}

export type NavigatorType = (to: To, options?: NavigateOptions) => void;

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigator?: NavigatorType
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export interface ThunkConfig<ErrorType> {
    rejectValue: ErrorType;
    extra: ThunkExtraArg;
    state: StateSchema;
}
