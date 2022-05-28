import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  userData: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
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
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.userData = {};
    },
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
