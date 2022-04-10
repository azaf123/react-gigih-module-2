import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('access_token') ?? ''
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      localStorage.setItem('access_token', accessToken)
      state.token = accessToken
    },
    setRemoveAccessToken: (state) => {
      state.token = ''
      localStorage.removeItem('access_token')
    }
  }
})

export const { setAccessToken, setRemoveAccessToken } = tokenSlice.actions

export default tokenSlice.reducer
