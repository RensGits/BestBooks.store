import { configureStore } from "@reduxjs/toolkit";
import searchInputReducer from './slices/searchInput'

export const store = configureStore({
    reducer: {
        searchInput: searchInputReducer
    }
});