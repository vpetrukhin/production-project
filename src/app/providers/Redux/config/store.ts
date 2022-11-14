import { CombinedState, configureStore, Reducer, ReducersMapObject, ThunkMiddleware, MiddlewareArray, Action } from '@reduxjs/toolkit';
import { UserReducer } from 'entity/User';
import { ScrollStorageReducer } from 'feutures/scrollStorage';
import { $api } from 'shared/api/API';
import { AsyncStateSchema, StateSchema, StateWithReducerManager, ThunkExtraArg } from '../types/StateSchema';
import { createReducerManager } from './createReducerManager';

export function createReduxStore(
    initialState: StateSchema,
    asyncReducers?: ReducersMapObject<AsyncStateSchema | undefined>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: UserReducer,
        scrollStorage: ScrollStorageReducer,
        ...asyncReducers
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArgs: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore<StateSchema, Action, MiddlewareArray<[ThunkMiddleware<StateSchema, Action, ThunkExtraArg>]>>({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState as StateSchema,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            {
                thunk: {
                    extraArgument: extraArgs
                }
            }
        ),
    }) as StateWithReducerManager;

    store.reducerManager = reducerManager;

    return store;
}