import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API =
  "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=";
export const getData = createAsyncThunk("data/getData", async () => {
  return fetch(API).then((res) => res.json());
});

const initialState = {
  result: [],
  loading: false,
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers:{},
  extraReducers: {
    [getData.pending]: (state, action) => {
     state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default dataSlice.reducer;
