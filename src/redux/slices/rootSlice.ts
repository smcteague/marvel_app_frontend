import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Spider Man',
        description: 'Wears spider suit and swings between buildings',
        comics_appeared_in: 250, 
        super_power: 'shoots silk from wrists enabling swinging between buildings',
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        chooseDescription: (state, action) => {state.description = action.payload},
        chooseComicsAppearedIn: (state, action) => {state.comics_appeared_in = action.payload},
        chooseSuperpower: (state, action) => {state.super_power = action.payload},
    }
});

export const reducer = rootSlice.reducer;
export const {
    chooseName,
    chooseDescription,
    chooseComicsAppearedIn,
    chooseSuperpower
} = rootSlice.actions;

