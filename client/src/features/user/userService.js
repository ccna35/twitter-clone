import React from "react";
import axios from "axios";

const API_URL = "/api/users/";
const FOLLOW_API_URL = "/api/users/followUser/:myUserName";

const getUserData = async (userName) => {
  const res = await axios.get(API_URL + userName);
  return res.data;
};

const updateUserData = async (userData) => {
  const res = await axios.put(`${API_URL + userData.userId}`, userData.newData);
  console.log(res.data);
  return res.data;
};

const getAllUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// This function handles the user follow process.
// The data sent with this API call include the tweet ID & the like action which consists of the user ID who liked the tweet.

const followProcess = async (data) => {
  const res = await axios.put(`${FOLLOW_API_URL + data.myUserName}`, data);
  console.log(res.data);
  return res.data;
};

const userService = {
  getUserData,
  getAllUsers,
  updateUserData,
  followProcess,
};

export default userService;
