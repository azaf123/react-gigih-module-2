import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TokenSlice = {
  accessToken: string,
};
// const initialState = {
//   token: { accessToken: localStorage.getItem('access_token') ?? ''},
// };
const initialState: TokenSlice = {
  accessToken: localStorage.getItem('access_token') ?? '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAccessToken: (state, action:PayloadAction<{
      accessToken: string,
    }>) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
      localStorage.setItem('access_token', accessToken);
    },
    setRemoveAccessToken: (state) => {
      state.accessToken = '';
      localStorage.removeItem('access_token');
    },
  },
});

export const { setAccessToken, setRemoveAccessToken } = tokenSlice.actions;
export default tokenSlice.reducer;
