import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    response: null,
    searchWord : ""
  },
  reducers: {
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    setSearchString : (state, action) => {
      state.searchWord = action.payload;
    },
  },
});

export const { setResponse,setSearchString } = searchSlice.actions;

export default searchSlice.reducer;
