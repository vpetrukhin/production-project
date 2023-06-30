import {
    ReducerList,
    ReducerManager,
    StateSchema,
    StateSchemaKeys,
} from '../types/StateSchema';
import { Action, combineReducers, Reducer } from '@reduxjs/toolkit';

export function createReducerManager(
    initialReducers: ReducerList,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers as ReducerList);

    let keysToRemove: Array<StateSchemaKeys> = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema, action: Action) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => delete state[key]);
                keysToRemove = [];
            }

            // Разобраться с типами
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKeys) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];

            keysToRemove.push(key);

            combinedReducer = combineReducers(reducers);
        },
    };
}
