import { AxiosInstance } from 'axios';
import {
    Action, CombinedState, EnhancedStore, Middleware, MiddlewareArray, Reducer, ThunkMiddleware
} from '@reduxjs/toolkit';
import {
    ArticleDetailsCommentsSchema, ArticleDetailsRecomenationSchema
} from '@/pages/ArticlesDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { ProfileSchema } from '@/feutures/EditableProfileCard';
import { LoginSchema } from '@/feutures/AuthByUserName';
import { AddCommentFormSchema } from '@/feutures/addComment';
import { ScrollStorageSchema } from '@/feutures/scrollStorage';
import { UserSchema } from '@/entity/User';
import { ArticleSchema } from '@/entity/Article';
import { rtkApi } from '@/shared/api/rtkAPi';
import { createReduxStore } from '..';


export interface StateSchema {
    user: UserSchema,
    scrollStorage: ScrollStorageSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // async
    profile?: ProfileSchema,
    login?: LoginSchema,
    article?: ArticleSchema,
    articleDetailsComments?: ArticleDetailsCommentsSchema,
    articleDetailsRecomendation?: ArticleDetailsRecomenationSchema,
    addCommentFrom?: AddCommentFormSchema,
    articlesPage?: ArticlesPageSchema,
}

export type StateSchemaKeys = keyof StateSchema;

export type ReducerList = {
    [name in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[name]>>
}

export interface ReducerManager {
    getReducerMap: () => ReducerList,
    reduce: (state: StateSchema, action: Action) => CombinedState<DeepPartial<ReducerList>>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface StateWithReducerManager extends EnhancedStore<StateSchema, Action, MiddlewaresType> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export interface ThunkConfig<ErrorType> {
    rejectValue: ErrorType;
    extra: ThunkExtraArg;
    state: StateSchema;
}

export type MiddlewaresType = MiddlewareArray<[
    ThunkMiddleware<StateSchema, Action, ThunkExtraArg>,
    Middleware<ReturnType<typeof rtkApi.middleware>>
]>
