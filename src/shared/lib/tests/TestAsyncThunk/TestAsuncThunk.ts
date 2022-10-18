import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';

type AsyncAction<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {
    rejectValue: RejectedValue;
}>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => void;
    action: AsyncAction<Return, Arg, RejectedValue>;

    constructor(action: AsyncAction<Return, Arg, RejectedValue>) {
        this.action = action;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.action(arg);
        const result = action(this.dispatch, this.getState, true);

        return result;
    }
}