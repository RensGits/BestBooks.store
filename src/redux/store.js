import { configureStore } from "@reduxjs/toolkit";
import searchInputReducer from './slices/searchInputSlice';
import allListsReducer from './slices/allListsSlice';

export const store = configureStore({
    reducer: {
        searchInput: searchInputReducer,
        allLists: allListsReducer
    }
});