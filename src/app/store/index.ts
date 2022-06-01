import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createReducer from "./reducers";

// const enhancer = applyMiddleware(thunk);
const rootReducer = createReducer();

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 
export default store;