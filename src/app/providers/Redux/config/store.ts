import { CombinedState, configureStore, Reducer } from '@reduxjs/toolkit';
import { UserReducer } from '@/entity/User';
import { ScrollStorageReducer } from '@/feutures/scrollStorage';
import { $api } from '@/shared/api/API';
import { rtkApi } from '@/shared/api/rtkAPi';
import { ReducerList, StateSchema, StateWithReducerManager, ThunkExtraArg } from '../types/StateSchema';
import { createReducerManager } from './createReducerManager';

export function createReduxStore(
    initialState: StateSchema,
    asyncReducers?: ReducerList,
) {
    const rootReducer: ReducerList = {
        user: UserReducer,
        scrollStorage: ScrollStorageReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
        ...asyncReducers
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArgs: ThunkExtraArg = {
        api: $api,
    };



    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState as StateSchema,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            {
                thunk: {
                    extraArgument: extraArgs
                }
            }
        ).concat(rtkApi.middleware),
    }) as StateWithReducerManager;

    store.reducerManager = reducerManager;

    return store;
}