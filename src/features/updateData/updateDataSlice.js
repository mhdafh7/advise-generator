import { createSlice } from '@reduxjs/toolkit';

export const updateDataSlice = createSlice({
    name: 'updateData',
    initialState: {
        value: null,
    },
    reducers: {
        changeData: (state, newData) => {
            state.value = newData;
        },
    },
});

export const { changeData } = updateDataSlice.actions;

export const selectedData = (state) => state.updateData.value;

export default updateDataSlice.reducer;
