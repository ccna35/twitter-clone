import {
  createSlice,
  createAsyncThunk,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  fullUserData: [],
  users: [],
  isError: false,
  isSuccess: false,
  isUserLoading: false,
  areUsersLoading: false,
  message: "",
  theme: "light",
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

export const updateUserData = createAsyncThunk(
  "tweet/updateUserData",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await userService.getUserData(userData);
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

export const getAllUsers = createAsyncThunk(
  "tweet/getallusers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await userService.getAllUsers();
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
    changeTheme: (state, action) => {
      state.theme = action.payload;
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
    [getAllUsers.pending]: (state) => {
      state.areUsersLoading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.areUsersLoading = false;
      state.isSuccess = true;
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.areUsersLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.users = [];
    },
  },
});

export const { reset, changeTheme } = userSlice.actions;

export default userSlice.reducer;
