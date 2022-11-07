import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import replyService from "./replyService";

const initialState = {
  replies: [],
  reply: {},
  isError: false,
  isSuccess: false,
  areRepliesLoading: false,
  message: "",
};

export const createReply = createAsyncThunk(
  "reply/createreply",
  async (replyData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await replyService.createReply(replyData);
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

export const deleteReply = createAsyncThunk(
  "reply/deletereply",
  async (replyID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await replyService.deleteReply(replyID);
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

export const getAllReplies = createAsyncThunk(
  "reply/getallreplies",
  async (tweetID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await replyService.getAllReplies(tweetID);
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

export const getSingleReply = createAsyncThunk(
  "reply/getsinglereply",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await replyService.getSingleReply(id);
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

export const likeReply = createAsyncThunk(
  "reply/likeReply",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await replyService.likeReply(data);
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

// export const retweet = createAsyncThunk(
//   "tweet/retweet",
//   async (data, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       return await replyService.retweet(data);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return rejectWithValue(message);
//     }
//   }
// );

export const replySlice = createSlice({
  name: "reply",
  initialState,
  reducers: {
    reset: (state) => {
      state.areRepliesLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: {
    [getAllReplies.pending]: (state) => {
      state.areRepliesLoading = true;
    },
    [getAllReplies.fulfilled]: (state, action) => {
      state.areRepliesLoading = false;
      state.isSuccess = true;
      state.replies = action.payload;
    },
    [getAllReplies.rejected]: (state, action) => {
      state.areRepliesLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.replies = [];
    },
    [getSingleReply.pending]: (state) => {
      state.areRepliesLoading = true;
    },
    [getSingleReply.fulfilled]: (state, action) => {
      state.areRepliesLoading = false;
      state.isSuccess = true;
      state.reply = action.payload;
    },
    [getSingleReply.rejected]: (state, action) => {
      state.areRepliesLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.reply = {};
    },
    [createReply.pending]: (state) => {
      state.areRepliesLoading = false;
    },
    [createReply.fulfilled]: (state, action) => {
      state.areRepliesLoading = false;
      state.isSuccess = true;
      state.replies = [action.payload, ...state.replies];
    },
    [createReply.rejected]: (state, action) => {
      state.areRepliesLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.replies = [...state.replies];
    },
    [deleteReply.pending]: (state) => {
      state.areRepliesLoading = false;
    },
    [deleteReply.fulfilled]: (state, action) => {
      state.areRepliesLoading = false;
      state.isSuccess = true;
      state.replies = state.replies.filter(
        (reply) => reply._id !== action.payload._id
      );
    },
    [deleteReply.rejected]: (state, action) => {
      state.areRepliesLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.replies = [...state.replies];
    },
  },
});

export const { reset } = replySlice.actions;

export default replySlice.reducer;
