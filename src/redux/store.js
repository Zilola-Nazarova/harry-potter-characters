import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import gpCharactersReducer from './gpCharacters/gpCharactersSlice';

const store = configureStore({
  reducer: {
    gpCharacters: gpCharactersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
