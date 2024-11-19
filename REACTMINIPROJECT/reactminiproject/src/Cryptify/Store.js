import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './Slice';

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
    },
});
