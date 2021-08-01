import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface place {
  id: number;
  name: string;
  temp: number;
  min: number;
  max: number;
  wind: number;
}

export interface WeatherState {
  curPlace: number;
  list: place[]
}

const initialState: WeatherState = {  
  curPlace: 0,
  list: [
    {
      id: 0,
      name: "Алматы",
      temp: 20,
      min: 18,
      max: 25,
      wind: 5
    },
    {
      id: 1,
      name: "Москва",
      temp: 20,
      min: 20,
      max: 28,
      wind: 1
    },
    {
      id: 3,
      name: "Стамбул",
      temp: 30,
      min: 20,
      max: 35,
      wind: 8
    },
    {
      id: 4,
      name: "Дубай",
      temp: 40,
      min: 30,
      max: 48,
      wind: 1
    },
    {
      id: 5,
      name: "Бишкек",
      temp: 24,
      min: 20,
      max: 28,
      wind: 1
    }
  ]
};

export const weatherSlice = createSlice({
  name: 'Weather',
  initialState,
  reducers: {
    setCur: (state, action: PayloadAction<number>) => {
      state.curPlace = action.payload;
    },
  },
});

export const {  setCur } = weatherSlice.actions;

export const selectList = (state: RootState) => state.weater.list;
export const selectCurPlace = (state: RootState) => state.weater.list.filter(item => item.id === state.weater.curPlace)[0];

export default weatherSlice.reducer;
