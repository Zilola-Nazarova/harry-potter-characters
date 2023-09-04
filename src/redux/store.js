import { configureStore } from '@reduxjs/toolkit';
import mountainsReducer from '@/redux/mountains/mountainsSlice';

const store = configureStore({
  reducer: {
    mountains: mountainsReducer,
  },
});

export default store;