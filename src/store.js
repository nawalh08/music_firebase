import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";
import musicSlice from "./components/music/musicSlice";


export default configureStore({
  reducer: {
    auth: authSlice,
    music : musicSlice

  },
});
