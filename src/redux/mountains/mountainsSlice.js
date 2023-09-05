import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import mountainsData from '@/database/mountainsData';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast?';
const TIMEZONE = 'timezone=auto';
const CURRENT_WEATHER = 'current_weather=true';
const MODELS = 'models=gfs_seamless,icon_seamless';
const FORECAST = 'hourly=temperature_2m,precipitation,windspeed_10m,cloudcover';
const REQUEST = `${BASE_URL}${TIMEZONE}&${CURRENT_WEATHER}&${MODELS}&${FORECAST}`;

export const getWeather = createAsyncThunk(
  'mountains/getWeather',
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
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.mountains = state.mountains.map((peak) => {
          if (peak.name === action.payload.name) {
            return {
              ...peak,
              current_weather: action.payload.current_weather,
              forecast: action.payload.hourly,
              time: action.payload.current_weather.time.split("T").pop(),
              date: action.payload.current_weather.time.split("T")[0],
            };
          }
          return peak;
        })
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default mountainsSlice.reducer;