const createFile = require('./helpers/createFile');

const createSliceFile = async (dir, sliceName) => {
    const sliceFileTemplate = `
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${sliceName}Schema } from './../types/${sliceName}Schema';

const initialState: ${sliceName}Schema = {};

export const ${sliceName}Slice = createSlice({
    name: '${sliceName}',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {}
    },
    //extraReducers: (builder) => {
    //    builder.addCase(, (state) => {
    //        state.error = undefined;
    //        state.isLoading = true;
    //    });
    //    builder.addCase(, (state) => {
    //        state.isLoading = false;
    //    });
    //    builder.addCase(, (state, action) => {
    //        state.error = action.payload;
    //        state.isLoading = false;
    //    });
    //},
});

export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;
`;

    await createFile(dir, `${sliceName}Slice.ts`, sliceFileTemplate);

};

module.exports = createSliceFile;