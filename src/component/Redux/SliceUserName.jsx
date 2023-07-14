import { createSlice } from '@reduxjs/toolkit';

const changeUsernameSlice = createSlice({
  name: 'changeUsername',
  initialState: '',
  reducers: {
    setUsername: (state, action) => {
      return action.payload;
    },
    
  },
});

export const { setUsername } = changeUsernameSlice.actions;
export default changeUsernameSlice.reducer;
