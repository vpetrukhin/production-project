import { CombinedState, configureStore, Reducer, ReducersMapObject, AnyAction, ThunkMiddleware, MiddlewareArray } from '@reduxjs/toolkit';
import { UserReducer } from 'entity/User';
import { $api } from 'shared/api/API';
import { AsyncStateSchema, NavigatorType, StateSchema, StateWithReducerManager, ThunkExtraArg } from '../types/StateSchema';
import { createReducerManager } from './createReducerManager';

export function createReduxStore(
    initialState: StateSchema,
    asyncReducers?: ReducersMapObject<AsyncStateSchema | undefined>,
    navigator?: NavigatorType
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: UserReducer,
        ...asyncReducers
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArgs: ThunkExtraArg = {
        api: $api,
        navigator
    };

    const store = configureStore<StateSchema, AnyAction, MiddlewareArray<[ThunkMiddleware<StateSchema, AnyAction, ThunkExtraArg>]>>({
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

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];