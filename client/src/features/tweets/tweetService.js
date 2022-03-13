import axios from "axios";

const API_URL = "/api/tweets/";

const createTweet = async (tweetData) => {
  const res = await axios.post(API_URL, tweetData, {
    headers: {
      authorization: tweetData.token,
    },
  });
  console.log(res.data);
  return res.data;
};

const getAllTweets = async (userData) => {
  const res = await axios.get(API_URL + userData.id);
  console.log(res.data);
  return res.data;
};

const getSingleTweet = async (id) => {
  const res = await axios.get(API_URL + id);
  console.log(res.data);
  return res.data;
};

const deleteTweet = async (id) => {
  const res = await axios.get(API_URL + id);
  console.log(res.data);
  return res.data;
};

const tweetService = {
  createTweet,
  getAllTweets,
  getSingleTweet,
  deleteTweet,
};

export default tweetService;
