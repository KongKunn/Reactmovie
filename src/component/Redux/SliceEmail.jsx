import { createSlice } from '@reduxjs/toolkit';

const changeEmailSlice = createSlice({
  name: 'changeEmail',
  initialState: '',
  reducers: {
    setEmail: (state, action) => {
      return action.payload;
    },
    
  },
});

export const { setEmail } = changeEmailSlice.actions;
export default changeEmailSlice.reducer;
