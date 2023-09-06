import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import mountainsReducer from './mountains/mountainsSlice';

const store = configureStore({
  reducer: {
    mountains: mountainsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
