import {createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "themeSlice"
    ,initialState: {
        theme: "light"
    }
    ,reducers: {
        updateTheme : (state, action :{payload: {theme: string}}) =>{
            state.theme = action.payload.theme;
        }
    }
});

export default themeSlice.reducer;
export const {updateTheme} = themeSlice.actions;