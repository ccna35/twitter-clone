import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import tweetReducer from "../features/tweets/tweetSlice";
import replyReducer from "../features/replies/replySlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tweet: tweetReducer,
    user: userReducer,
    reply: replyReducer,
  },
});
