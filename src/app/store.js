import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../Slices/UserSlice";
import movieReducer from "../Slices/MovieSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
