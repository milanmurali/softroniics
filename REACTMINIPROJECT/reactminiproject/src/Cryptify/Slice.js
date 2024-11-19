import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    portfolio: [],
};

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,   
    reducers: {
        addToPortfolio: (state, action) => {
            const coinExists = state.portfolio.find((coin) => coin.id === action.payload.id);
            if (!coinExists) {
                state.portfolio.push(action.payload);
            }
        },
        removeFromPortfolio: (state, action) => {
            state.portfolio = state.portfolio.filter((coin) => coin.id !== action.payload.id);
        },
    },
});

export const { addToPortfolio, removeFromPortfolio } = portfolioSlice.actions;
export default portfolioSlice.reducer;

