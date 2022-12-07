import { StateSchema } from '@/app/providers/Redux';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type AsyncAction<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {
    rejectValue: RejectedValue;
}>

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    action: AsyncAction<Return, Arg, RejectedValue>;
    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any>;

    constructor(action: AsyncAction<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
        this.action = action;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.action(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api });

        return result;
    }
}