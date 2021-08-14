import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import weaterReducer from '../features/weatherSlice';

export const store = configureStore({
  reducer: {
    weater: weaterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
