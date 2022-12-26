import { useMemo } from 'react';
import { bindActionCreators, createSlice, CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit';
import { useAppDispatch } from '../hooks/useAppDispatch';

export function buildSlice<State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice<State, CaseReducers, Name>(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useAppDispatch();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };

    return {
        ...slice,
        useActions
    };
}