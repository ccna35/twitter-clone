import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from local storage
const user = localStorage.getItem("user");

const initialState = {
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  userExists: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await authService.register(user);
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

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    resetUser: (state) => {
      state.userExists = false;
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      state.userExists = true;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
      state.userExists = false;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      state.userExists = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
      state.userExists = false;
    },
    [logout.pending]: (state) => {
      state.isLoading = true;
    },
    [logout.fulfilled]: (state) => {
      state.user = null;
      state.userExists = false;
    },
  },
});

export const { reset, resetUser } = authSlice.actions;

export default authSlice.reducer;
