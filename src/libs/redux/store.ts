import { configureStore } from "@reduxjs/toolkit";
import gameStartSlice from "./gameStartSlice";
import catchingSlice from "./catchingSlice";

export const store = configureStore({
    reducer: {
        gameStart: gameStartSlice,
        catching: catchingSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
