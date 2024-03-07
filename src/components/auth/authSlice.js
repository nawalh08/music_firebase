import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_DB_URL, SIGN_IN_URL, SIGN_UP_URL } from "../../firebaseConfig";
import axios from "axios";

export const fetchConnexion = createAsyncThunk("music/fetchConnexion", async (credentials) => {

  const response = await axios.post(SIGN_IN_URL, credentials)
  localStorage.setItem("token", response.data.idToken) 
  const data = await response.data;
  return data
}

);

export const fetchInscription = createAsyncThunk("music/fetchInscription", async (credentials) => {


  const response = await axios.post(SIGN_UP_URL, credentials)

  const data = await response.data;
  return data
}

);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    authMode: "Se connecter",
  },
  reducers: {
    removeUser: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
    setAuthMode: (state, action) => {
      state.authMode = action.payload;
    }
  },

    extraReducers: (builder) => {
    builder.addCase(fetchConnexion.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log(action.payload);
    });


  }

},

);

export const { setUser, removeUser, setAuthMode } = authSlice.actions;
export default authSlice.reducer;
