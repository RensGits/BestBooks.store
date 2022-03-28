import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import searchInputReducer from './slices/searchInputSlice';
import allBooksReducer from './slices/allBooksSlice';
import allListsReducer from './slices/allListsSlice';
import listBooksReducer from './slices/listBooksSlice';
import filterOverviewReducer from './slices/filterOverviewSlice';
import sortByReducer from './slices/sortBySlice';

const reducers = combineReducers({
    allBooks: allBooksReducer,
    allLists: allListsReducer,
    listBooks: listBooksReducer,
    overviewFilters: filterOverviewReducer,
    searchInput: searchInputReducer,
    sortBy: sortByReducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  blacklist: ['searchInput','overviewFilters','weekFilters','sortBy']
}

const persistedReducer = persistReducer(persistConfig,reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
