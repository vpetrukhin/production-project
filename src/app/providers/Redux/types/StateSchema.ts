import { LoginSchema } from './../../../../feutures/AuthByUserName';
import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    login?: LoginSchema,
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