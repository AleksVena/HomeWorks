import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface place {
  id: number;
  name: string;
  favorites: boolean;
  temp: number;
  min: number;
  max: number;
  wind: number;
}

export interface fav {
  id: number;
  favorites: boolean;
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
      favorites: false,
      temp: 20,
      min: 18,
      max: 25,
      wind: 5
    },
    {
      id: 1,
      name: "Москва",
      favorites: false,
      temp: 20,
      min: 20,
      max: 28,
      wind: 1
    },
    {
      id: 3,
      name: "Стамбул",
      favorites: false,
      temp: 30,
      min: 20,
      max: 35,
      wind: 8
    },
    {
      id: 4,
      name: "Дубай",
      favorites: false,
      temp: 40,
      min: 30,
      max: 48,
      wind: 1
    },
    {
      id: 5,
      name: "Бишкек",
      favorites: false,
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
    moveToFav: (state, action: PayloadAction<fav>) => {
      state.list.map(pl =>
        (pl.id === action.payload.id)
          ? pl.favorites = action.payload.favorites
          : pl
      )
    },
    setCur: (state, action: PayloadAction<number>) => {
      state.curPlace = action.payload;
    },
  },
});

export const { moveToFav, setCur } = weatherSlice.actions;

export const selectList = (state: RootState) => state.weater.list;
export const selectFavList = (state: RootState) => state.weater.list.filter(item => item.favorites);
export const selectCurPlace = (state: RootState) => state.weater.list.filter(item => item.id === state.weater.curPlace)[0];

export default weatherSlice.reducer;
