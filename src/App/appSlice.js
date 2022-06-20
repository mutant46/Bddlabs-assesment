import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/getData", async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  window.localStorage.setItem("data", JSON.stringify(data));
  return data;
});

const appSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
  },
});

export default appSlice.reducer;
