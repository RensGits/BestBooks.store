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




const reducers = combineReducers({
    searchInput: searchInputReducer,
    allBooks: allBooksReducer,
    allLists: allListsReducer,
    listBooks: listBooksReducer,
    overviewFilters: filterOverviewReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  blacklist: ['searchInput','overviewFilters','weekFilters']
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
