import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://hp-api.onrender.com/api/characters';

export const getGPCharacters = createAsyncThunk(
  'gpCharacters/getGPCharacters',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(`${BASE_URL}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  gpCharacters: [],
  isLoading: false,
  error: undefined,
};

export const gpCharactersSlice = createSlice({
  name: 'gpCharacters',
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(getGPCharacters.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getGPCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.gpCharacters = action.payload.slice(0, 50);
      })
      .addCase(getGPCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default gpCharactersSlice.reducer;
