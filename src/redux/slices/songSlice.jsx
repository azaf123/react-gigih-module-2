import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selected: [],
  search: '',
  data: [],
  isLoading: false,
  isError: false
}
const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      const { selected } = action.payload
      state.selected = selected
    },
    setSearch: (state, action) => {
      const { search } = action.payload
      state.search = search
    },
    setData: (state, action) => {
      const { data } = action.payload
      state.data = data
    },
    setIsLoading: (state, action) => {
      const { isLoading } = action.payload
      state.isLoading = isLoading
    },
    setIsError: (state, action) => {
      const { isError } = action.payload
      state.isError = isError
    },
    handleSongSelected: (state, action) => {
      const { uri } = action.payload
      state.selected = [...state.selected, uri]
    },
    handleSongDeselected: (state, action) => {
      const { uri } = action.payload
      state.selected = state.selected.filter((song) => song !== uri)
    }

  }
})

export const { setSelected, setSearch, setData, setIsError, setIsLoading, handleSongSelected, handleSongDeselected } = songSlice.actions
export default songSlice.reducer
