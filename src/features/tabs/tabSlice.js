import { createSlice } from '@reduxjs/toolkit';

export const tabSlice = createSlice({
    name: 'tabSwitcher',
    initialState: {
        value: 'home',
    },
    reducers: {
        changeToHome: (state) => {
            state.value = 'home';
        },
        changeToSearch: (state) => {
            state.value = 'search';
        },
    },
});

export const { changeToHome, changeToSearch } = tabSlice.actions;

export const selectTab = (state) => state.tabSwitcher.value;

export default tabSlice.reducer;
