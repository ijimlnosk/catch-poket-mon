import {configureStore} from "@reduxjs/toolkit"
import gameStartSlice from "./gameStartSlice"

export const store = configureStore({
    reducer:{
        gameStart: gameStartSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;