import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { fetchWeather, WeatherResponse } from './weatheApi';


export interface WeatherState {
  list: string[]
  wpd: WeatherResponse;
}

const initialState: WeatherState = {
  list: localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list') as string) : [],
  wpd: null as any,
};

export interface CityResp {
  name: string;
  count: number;
}

export const fetchWeatherAsync = createAsyncThunk(
  'counter/fetchWeather',
  async (param: CityResp) => {
    const r = await fetchWeather(param.name, param.count);
    return r.data;
  }
);

export const weatherSlice = createSlice({
  name: 'Weather',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherAsync.pending, (state) => {})
      .addCase(fetchWeatherAsync.fulfilled, (state, action) => {
        if (action.payload && action.payload.cod && action.payload.cod === "200") {
          state.wpd = action.payload;
          if (state.list.filter(x => x.toLowerCase() === action.payload.city.name.toLowerCase()).length === 0)
            state.list.push(action.payload.city.name);
            localStorage.setItem('list', JSON.stringify(state.list));
        }
        else {
          state.wpd = null as any;
        }

      });
  },
});

export const selectList = (state: RootState) => state.weater.list;
export const selectWeather = (state: RootState) => state.weater.wpd;

export default weatherSlice.reducer;
