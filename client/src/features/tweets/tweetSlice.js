import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tweetService from "./tweetService";

const initialState = {
  tweets: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createTweet = createAsyncThunk(
  "tweet/createtweet",
  async (tweetData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await tweetService.createTweet(tweetData);
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

export const deleteTweet = createAsyncThunk(
  "tweet/deletetweet",
  async (tweetID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await tweetService.deleteTweet(tweetID);
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

export const getAllTweets = createAsyncThunk(
  "tweet/getalltweets",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await tweetService.getAllTweets(user);
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

export const getSingleTweet = createAsyncThunk(
  "tweet/getsingletweet",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await tweetService.getAllTweets();
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

export const likeTweet = createAsyncThunk(
  "tweet/likeTweet",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await tweetService.likeTweet(data);
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

export const tweetSlice = createSlice({
  name: "tweet",
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
    [getAllTweets.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllTweets.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tweets = action.payload;
    },
    [getAllTweets.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.tweets = [];
    },
    [createTweet.pending]: (state) => {
      state.isLoading = false;
    },
    [createTweet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tweets = [action.payload, ...state.tweets];
    },
    [createTweet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.tweets = [...state.tweets];
    },
    [deleteTweet.pending]: (state) => {
      state.isLoading = false;
    },
    [deleteTweet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tweets = state.tweets.filter(
        (tweet) => tweet._id !== action.payload.id
      );
    },
    [deleteTweet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.tweets = [...state.tweets];
    },
  },
});

export const { reset } = tweetSlice.actions;

export default tweetSlice.reducer;
