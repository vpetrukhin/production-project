import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { ReducerList, StateSchema } from '../types/StateSchema';


interface StoreProviderProps {
    children?: ReactNode;
    initialState?: Partial<StateSchema>;
    asyncReducers?: ReducerList,
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