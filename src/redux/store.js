import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import gpCharactersReducer from './mountains/mountainsSlice';

const store = configureStore({
  reducer: {
    gpCharacters: gpCharactersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
