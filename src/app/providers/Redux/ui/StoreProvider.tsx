import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { AsyncStateSchema, StateSchema } from '../types/StateSchema';


interface StoreProviderProps {
    children?: ReactNode;
    initialState?: Partial<StateSchema>;
    asyncReducers?: ReducersMapObject<AsyncStateSchema | undefined>,
}


export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(initialState as StateSchema, asyncReducers);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};