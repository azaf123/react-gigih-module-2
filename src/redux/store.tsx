import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tokenReducer from './slices/tokenSlice';
import songReducer from './slices/songSlice';

const store = configureStore({
  reducer: {
    token: tokenReducer,
    song: songReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
// export const tokenSelector = (state: RootState) => state.token;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
