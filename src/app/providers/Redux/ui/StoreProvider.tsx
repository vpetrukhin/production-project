import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../types/StateSchema';


interface StoreProviderProps {
    children?: ReactNode;
    initialState?: Partial<StateSchema>;
}


export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    const navigator = useNavigate();

    const store = createReduxStore(initialState as StateSchema, {}, navigator);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};