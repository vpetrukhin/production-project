import { LoginSchema } from 'feutures/AuthByUserName';
import { UserSchema } from 'entity/User';
import { Action, AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entity/Profile';
import { AxiosInstance } from 'axios';
import { To, NavigateOptions } from 'react-router-dom';

export interface AsyncStateSchema {
    login?: LoginSchema | undefined,
    profile?: ProfileSchema | undefined
}
export interface StateSchema extends AsyncStateSchema {
    user: UserSchema,
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface StateWithReducerManager extends EnhancedStore<StateSchema, Action> {
    reducerManager: ReducerManager;
}

export type NavigatorType = (to: To, options?: NavigateOptions) => void;

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigator?: NavigatorType
}

export interface ThunkConfig<ErrorType> {
    rejectValue: ErrorType;
    extra: ThunkExtraArg;
}
