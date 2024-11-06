import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import counterReducer from "./Slice";
const Store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default Store;