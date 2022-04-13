import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './slices/tokenSlice';
import songReducer from './slices/songSlice';

export default configureStore({
  reducer: {
    token: tokenReducer,
    song: songReducer,
  },
});
