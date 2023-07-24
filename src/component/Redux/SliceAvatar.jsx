import { createSlice } from '@reduxjs/toolkit';

const changeAvatarSlice = createSlice({
  name: 'changeAvatar',
  initialState: '',
  reducers: {
    setAvatar: (state, action) => {
      return action.payload;
    },
    getAvatar: (state, action) => {
      return action.payload;
    },

    
  },
});

export const { setAvatar,getAvatar } = changeAvatarSlice.actions;
export default changeAvatarSlice.reducer;
