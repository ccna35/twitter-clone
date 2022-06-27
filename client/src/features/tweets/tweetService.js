import axios from "axios";

const API_URL = "/api/tweets/";
const LIKES_API_URL = "/api/tweets/likes/";
const RETWEETS_API_URL = "/api/tweets/retweets/";

const createTweet = async (tweetData) => {
  const res = await axios.post(API_URL, tweetData, {
    headers: {
      authorization: tweetData.token,
    },
  });
  return res.data;
};

const getAllTweets = async (userData) => {
  const res = await axios.get(API_URL + userData.username);
  return res.data;
};

const getSingleTweet = async (id) => {
  const res = await axios.get(API_URL + id);
  return res.data;
};

// This function handles tweet likes and dislikes.
// The data sent with this API call include the tweet ID & the like action which consists of the user ID who liked the tweet.

const likeTweet = async (data) => {
  const res = await axios.put(LIKES_API_URL + data.tweetID, {
    userID: data.userID,
    didUserLikeThisTweet: data.didUserLikeThisTweet,
  });
  return res.data;
};

// This function handles tweet retweets.
const retweet = async (data) => {
  const res = await axios.put(RETWEETS_API_URL + data.tweetID, {
    userID: data.userID,
    didUserRetweetThisTweet: data.didUserRetweetThisTweet,
  });
  return res.data;
};

// This function handles tweet deletion.
const deleteTweet = async (id) => {
  const res = await axios.delete(API_URL + id);
  return res.data;
};

const tweetService = {
  createTweet,
  getAllTweets,
  getSingleTweet,
  deleteTweet,
  likeTweet,
  retweet,
};

export default tweetService;
