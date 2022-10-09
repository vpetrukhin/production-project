import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../types/StateSchema';


interface StoreProviderProps {
    children?: ReactNode;
    initialState?: Partial<StateSchema>;
}


export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    return (
        <Provider store={createReduxStore(initialState as StateSchema)}>
            {children}
        </Provider>
    );
};