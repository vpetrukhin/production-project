import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StateWithReducerManager } from 'app/providers/Redux';
import { StateSchemaKeys } from 'app/providers/Redux';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = Partial<Record<StateSchemaKeys, Reducer>>

export type ReducerListEntries = [StateSchemaKeys, Reducer]

export interface DynamicModuleProps {
    reducers: ReducerList;
}

export const DynamicModule: FC<DynamicModuleProps> = (props) => {
    const { children, reducers } = props;

    const store = useStore() as StateWithReducerManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            dispatch({ type: `@${name}/init` });
            store.reducerManager.add(`${name}` as StateSchemaKeys, reducer);
        });

        return () => {
            Object.entries(reducers).forEach(([name, reducer]) => {
                dispatch({ type: `@${name}/remove` });
                store.reducerManager.remove(`${name}` as StateSchemaKeys);
            });
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return <>{children}</>;
};