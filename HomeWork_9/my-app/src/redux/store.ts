import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;