import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  fullUserData: [],
  isError: false,
  isSuccess: false,
  isUserLoading: false,
  message: "",
};

export const getUserData = createAsyncThunk(
  "tweet/getuserdata",
  async (userName, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await userService.getUserData(userName);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isUserLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.isUserLoading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.isSuccess = true;
      state.fullUserData = action.payload;
    },
    [getUserData.rejected]: (state, action) => {
      state.isUserLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.fullUserData = [];
    },
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
