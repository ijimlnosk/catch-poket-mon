import { createSlice } from "@reduxjs/toolkit";

interface Catching {
    isCatching: boolean;
}

const initialState: Catching = {
    isCatching: false,
};

const catchingSlice = createSlice({
    name: "catching",
    initialState,
    reducers: {
        setCatching: (state, action) => {
            state.isCatching = action.payload;
        },
    },
});

export const { setCatching } = catchingSlice.actions;

export default catchingSlice.reducer;
