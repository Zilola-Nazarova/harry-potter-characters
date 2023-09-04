import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import mountainsData from '@/database/mountainsData';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast?';
const TIMEZONE = 'timezone=auto';
const CURRENT_WEATHER = 'current_weather=true';
const REQUEST = `${BASE_URL}${TIMEZONE}&${CURRENT_WEATHER}&`;

export const getCurrentWeather = createAsyncThunk(
  'mountains/getCurrentWeather',
  async (peak, thunkAPI) => {
    try {
      const lat = peak.latitude;
      const long = peak.longitude;
      const elev = peak.elevation;
      const resp = await axios.get(`${REQUEST}&latitude=${lat}&longitude=${long}&elevation=${elev}`);
      resp.data.name = peak.name;
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  mountains: mountainsData,
  isLoading: false,
  error: undefined,
};

export const mountainsSlice = createSlice({
  name: 'mountains',
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(getCurrentWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.mountains = state.mountains.map((peak) => {
          if (peak.name === action.payload.name) {
            return {...peak, current_weather: action.payload.current_weather};
          }
          return peak;
        })
        // console.log(state.mountains)
        // console.log(newArray)
        // state.mountains = newArray;
      })
      .addCase(getCurrentWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default mountainsSlice.reducer;