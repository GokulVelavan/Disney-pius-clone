import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  useremail: "",
  userphoto: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUserInfo: (state, action) => {
      state.username = action.payload.name;
      state.useremail = action.payload.email;
      state.userphoto = action.payload.photo;
    },
    signOutUserInfo: (state) => {
      state.username = null;
      state.useremail = null;
      state.userphoto = null;
    },
  },
});

export const { signInUserInfo, signOutUserInfo } = UserSlice.actions;
export const selectUserName = (state) => state.user.username;
export const selectUserEmail = (state) => state.user.useremail;
export const selectUserPhoto = (state) => state.user.userphoto;
export default UserSlice.reducer;
