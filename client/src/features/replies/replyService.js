import axios from "axios";

const API_URL = "/api/replies/";
const REPLY_API_URL = "/api/replies/reply/";
const LIKES_API_URL = "/api/replies/likes/";
// const RETWEETS_API_URL = "/api/tweets/retweets/";

const createReply = async (replyData) => {
  const res = await axios.post(API_URL, replyData, {
    headers: {
      authorization: replyData.token,
    },
  });
  return res.data;
};

const getAllReplies = async (userData) => {
  const res = await axios.get(API_URL + userData.username);
  return res.data;
};

const getSingleReply = async (id) => {
  const res = await axios.get(REPLY_API_URL + id);
  return res.data;
};

// This function handles reply likes and dislikes.
// The data sent with this API call include the reply ID & the like action which consists of the user ID who liked the reply.

const likeReply = async (data) => {
  const res = await axios.put(LIKES_API_URL + data.replyID, {
    userID: data.userID,
    didUserLikeThisReply: data.didUserLikeThisReply,
  });
  return res.data;
};

// This function handles tweet retweets.
// const retweet = async (data) => {
//   const res = await axios.put(RETWEETS_API_URL + data.tweetID, {
//     userID: data.userID,
//     didUserRetweetThisTweet: data.didUserRetweetThisTweet,
//   });
//   return res.data;
// };

// This function handles tweet deletion.
const deleteReply = async (id) => {
  const res = await axios.delete(API_URL + id);
  return res.data;
};

const replyService = {
  createReply,
  getAllReplies,
  getSingleReply,
  deleteReply,
  likeReply,
};

export default replyService;
