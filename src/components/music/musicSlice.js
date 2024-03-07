import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_DB_URL } from "../../firebaseConfig";
import axios from "axios";

export const fetchMusic = createAsyncThunk("music/fetchMusic", async () => {
  const response = await axios.get(`${BASE_DB_URL}/musicList.json`);
  const data = await response.data;
  const music = [];

  for (const key in data) {
    music.push({ id: key, ...response.data[key] });
  }

  return music;
});

export const addMusic = createAsyncThunk("music/addMusic", async (newMusic) => {
  const token = localStorage.getItem("token")

  const response = await axios.post(`${BASE_DB_URL}musicList.json?auth=${token}`, newMusic);
  const data = await response.data;

  return {
    id: data.name,
    ...newMusic,
  };
});

export const deleteMusic = createAsyncThunk("music/deleteMusic", async (musicId) => {
  const token = localStorage.getItem("token")
  const response = await axios.delete(`${BASE_DB_URL}musicList/${musicId}.json?auth=${token}`);
  const data = await response.data;
  console.log('Coucou');
});

export const editMusic = createAsyncThunk("music/editMusic", async ({id,editedMusic}) => {
  console.log(id);
  console.log(editedMusic);
  const token = localStorage.getItem("token")
  const response = await axios.put(`${BASE_DB_URL}musicList/${id}.json?auth=${token}`,editedMusic);

  const data = await response.data;
  return(
    id,
    editedMusic
  )
});


const musicSlice = createSlice({
  name: "music",
  initialState: {
    musics: [],
    isLoading: false,
    change: false
  },
  reducers: {},
  /*
    .fullfilled => L'action se déclenche si la requête se termine
    .rejected => L'action se déclenche si la requête echoue
    .pending => l'action se déclenche pendant la requête
  */
  extraReducers: (builder) => {
    builder.addCase(fetchMusic.fulfilled, (state, action) => {
      state.musics = action.payload;
      console.log(action.payload);
    });
    builder.addCase(addMusic.fulfilled, (state, action) => {
      state.musics.push(action.payload);
      console.log(action.payload);
      state.change = !state.change
    });
    builder.addCase(fetchMusic.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteMusic.fulfilled, (state, action) => {
      console.log('coucou');
      state.change = !state.change
    })
     builder.addCase(editMusic.fulfilled, (state, action) => {    
       state.change = !state.change
    })
  },
});
export const { changeState } = musicSlice.actions
export default musicSlice.reducer;
