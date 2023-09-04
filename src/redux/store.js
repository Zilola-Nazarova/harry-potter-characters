import { configureStore } from '@reduxjs/toolkit';
import mountainsReducer from '@/redux/mountains/mountainsSlice';
import { logger } from 'redux-logger';

const store = configureStore({
  reducer: {
    mountains: mountainsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;