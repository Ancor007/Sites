import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./loginSlice";


const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export const AppDispatch = store.dispatch

export const RootState = store.getState

export default store  