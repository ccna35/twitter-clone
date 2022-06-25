import React from "react";
import axios from "axios";

const API_URL = "/api/users/";

const getUserData = async (userName) => {
  const res = await axios.get(API_URL + userName);
  return res.data;
};

const getAllUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const userService = {
  getUserData,
  getAllUsers,
};

export default userService;
