import { configureStore } from "@reduxjs/toolkit";
import searchInputReducer from './slices/searchInputSlice';
import allBooksReducer from './slices/allBooksSlice';
import allListsReducer from './slices/allListsSlice';
import listBooksReducer from './slices/listBooksSlice';
import currentSelectedBookReducer from './slices/currentSelectedBookSlice';

export const store = configureStore({
    reducer: {
        searchInput: searchInputReducer,
        allBooks: allBooksReducer,
        allLists: allListsReducer,
        listBooks: listBooksReducer,
        currentBook: currentSelectedBookReducer
    }
});
