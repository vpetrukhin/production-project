import { AxiosInstance } from 'axios';
import {
    Action, CombinedState, EnhancedStore, Middleware, MiddlewareArray, Reducer, ReducersMapObject, ThunkMiddleware
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

export interface AsyncStateSchema {
    login?: LoginSchema | undefined,
    profile?: ProfileSchema,
    article?: ArticleSchema | undefined,
    articleDetailsComments?: ArticleDetailsCommentsSchema | undefined,
    articleDetailsRecomendation?: ArticleDetailsRecomenationSchema | undefined,
    addCommentFrom?: AddCommentFormSchema,
    articlesPage?: ArticlesPageSchema,
}
export interface StateSchema extends AsyncStateSchema {
    user: UserSchema,
    scrollStorage: ScrollStorageSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type StateSchemaKeys = keyof StateSchema;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: Action) => CombinedState<StateSchema>;
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
