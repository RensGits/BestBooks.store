import { configureStore } from "@reduxjs/toolkit";
import searchInputReducer from './slices/searchInputSlice';
import allBooksReducer from './slices/allBooksSlice';
import allListsReducer from './slices/allListsSlice';
import listBooksReducer from './slices/listBooksSlice';

export const store = configureStore({
    reducer: {
        searchInput: searchInputReducer,
        allBooks: allBooksReducer,
        allLists: allListsReducer,
        listBooks: listBooksReducer 
    }
});