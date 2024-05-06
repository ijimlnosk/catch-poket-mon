import { createSlice } from "@reduxjs/toolkit"

interface GameStart {
    gameStart: boolean
}

const initialState: GameStart = {
    gameStart: false,
}

const gameStartSlice = createSlice({
    name: 'gameStart',
    initialState,
    reducers: {
        startGame: (state) => {
            state.gameStart = true;
        },
        endGame: (state) => {
            state.gameStart = false;
        }
    }
})

export const {startGame, endGame} = gameStartSlice.actions;

export default gameStartSlice.reducer