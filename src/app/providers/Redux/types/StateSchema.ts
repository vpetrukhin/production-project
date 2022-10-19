import { LoginSchema } from './../../../../feutures/AuthByUserName';
import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entity/Profile';
import { AxiosInstance } from 'axios';
import { To, NavigateOptions } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    login?: LoginSchema,
    profile?: ProfileSchema
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface StateWithReducerManager extends EnhancedStore {
    reducerManager: ReducerManager;
}

export type NavigatorType = (to: To, options?: NavigateOptions) => void;

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigator: NavigatorType
}

export interface ThunkConfig<ErrorType> {
    rejectValue: ErrorType;
    extra: ThunkExtraArg;
}
