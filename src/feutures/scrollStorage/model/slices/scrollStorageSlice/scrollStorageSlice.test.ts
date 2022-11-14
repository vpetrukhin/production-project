import { ScrollStorageSchema } from '../../types/scrollstorage';
import { ScrollStorageActions, ScrollStorageReducer } from './scrollStorageSlice';

const initialState: ScrollStorageSchema = {
    scroll: {}
};

describe('tests for scrollStorageSlice.test', () => {
    test('test for setScroll', () => {
        expect(ScrollStorageReducer(
            initialState,
            ScrollStorageActions.setScroll({
                scroll: 300,
                path: 'page'
            })
        )).toEqual({
            scroll: {
                page: 300,
            }
        });
    });
});