/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Data = {
  id : string,
  name : string,
  artists : {
    name : string,
  }[],
  album : {
    name : string,
    images : {
      url : string,
    }[],
  },
  uri : string,
};
type SongSlice = {
  selected : string[],
  search : string,
  data : Data[],
  isLoading : boolean,
  isError : boolean,
};
const initialState : SongSlice = {
  selected: [],
  search: '',
  data: [],
  isLoading: false,
  isError: false,
};
const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setSelected: (state, action:PayloadAction<{
      selected: string[],
    }>) => {
      const { selected } = action.payload;
      state.selected = selected;
    },
    setSearch: (state, action:PayloadAction<{
      search: string,
    }>) => {
      const { search } = action.payload;
      state.search = search;
    },
    setData: (state, action:PayloadAction<{
      data: Data[],
    }>) => {
      const { data } = action.payload;
      state.data = data;
    },
    setIsLoading: (state, action:PayloadAction<{
      isLoading: boolean,
    }>) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
    setIsError: (state, action:PayloadAction<{
      isError: boolean,
    }>) => {
      const { isError } = action.payload;
      state.isError = isError;
    },
    handleSongSelected: (state, action) => {
      const { uri } = action.payload;
      state.selected = [...state.selected, uri];
    },
    handleSongDeselected: (state, action) => {
      const { uri } = action.payload;
      state.selected = state.selected.filter((song) => song !== uri);
    },
  },
});

export const {
  setSelected,
  setSearch,
  setData,
  setIsError,
  setIsLoading,
  handleSongSelected,
  handleSongDeselected,
} = songSlice.actions;
export default songSlice.reducer;
