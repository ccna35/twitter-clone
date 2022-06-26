import React, { useEffect } from "react";
import { UserPhoto, UserPhotoContainer } from "./styles/NewTweet.styled";
import {
  TimeSincePosted,
  TweetAuthor,
  TweetBody,
  TweetContainer,
  TweetCount,
  TweetIconCountContainer,
  TweetImage,
  TweetInfoContainer,
  TweetLowerBar,
  TweetLowerBarIconContainer,
  TweetText,
  TweetUpperBar,
  TweetUpperBarIconContainer,
  UserHandle,
  UserName,
  UserVerifiedIconContainer,
} from "./styles/Tweet.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineHeart, AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../features/user/userSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { likeTweet, deleteTweet } from "../features/tweets/tweetSlice";

function Tweet({ tweet, username }) {
  const [likesArray, setLikesArray] = useState([...tweet.likes]);

  const date1 = new Date(tweet.createdAt);
  const timeDiff = Date.now() - Date.parse(date1);
  const timePosted = Math.floor(timeDiff / (1000 * 60));

  const { fullUserData, isUserLoading } = useSelector((state) => state.user);
  const { likes } = useSelector((state) => state.tweet);

  const dispatch = useDispatch();

  const handleLike = (tweetID) => {
    if (localStorage.getItem("user")) {
      if (!likesArray.includes(JSON.parse(localStorage.getItem("user"))._id)) {
        console.log("This user didn't like this tweet before");
        setLikesArray([
          ...likesArray,
          JSON.parse(localStorage.getItem("user"))._id,
        ]);
        console.log("likesArray : ", likesArray);
        const data = {
          tweetID,
          userID: JSON.parse(localStorage.getItem("user"))._id,
          didUserLikeThisTweet: false,
        };

        dispatch(likeTweet(data));
      } else {
        console.log("This user liked this tweet before");
        setLikesArray((prev) =>
          prev.filter(
            (userID) => userID !== JSON.parse(localStorage.getItem("user"))._id
          )
        );
        console.log("likesArray : ", likesArray);
        const data = {
          tweetID,
          userID: JSON.parse(localStorage.getItem("user"))._id,
          didUserLikeThisTweet: true,
        };

        dispatch(likeTweet(data));
      }
    }
  };

  const handleDelete = (id) => {
    if (
      localStorage.getItem("user") &&
      localStorage.getItem("user")._id === tweet.user
    ) {
      dispatch(deleteTweet(id)).then((data) => console.log(data));
    }
  };

  return (
    <TweetContainer>
      <UserPhotoContainer>
        <Link
          to={
            "/" + fullUserData.length > 0 &&
            fullUserData[0].profilePhoto.username
          }
        >
          <UserPhoto
            src={
              fullUserData.length > 0 && fullUserData[0].profilePhoto
                ? fullUserData[0].profilePhoto
                : "./images/blank-profile-picture-gf8e58e24f_640.png"
            }
          />
        </Link>
      </UserPhotoContainer>
      <TweetBody>
        <TweetUpperBar>
          <TweetInfoContainer>
            <UserName>
              <TweetAuthor>
                {fullUserData.length > 0 && (
                  <Link to={"/" + fullUserData[0].username}>
                    {fullUserData[0].name}
                  </Link>
                )}
              </TweetAuthor>
              {fullUserData.length > 0 && fullUserData[0].isVerified && (
                <UserVerifiedIconContainer>
                  <MdVerified />
                </UserVerifiedIconContainer>
              )}
            </UserName>
            <UserHandle>
              @{fullUserData.length > 0 && fullUserData[0].username}
            </UserHandle>
            <TimeSincePosted>
              {timePosted < 60
                ? timePosted + "m"
                : timePosted >= 60 && timePosted <= 1440
                ? Math.floor(timePosted / 60) + "h"
                : Math.floor(timePosted / 3600) + "d"}
            </TimeSincePosted>
          </TweetInfoContainer>
          <TweetUpperBarIconContainer onClick={() => handleDelete(tweet._id)}>
            <FontAwesomeIcon icon={faEllipsis} size="lg"></FontAwesomeIcon>
          </TweetUpperBarIconContainer>
        </TweetUpperBar>
        <TweetText>{tweet.text}</TweetText>
        {/* <TweetImage src="./images/FLo3hQmXwAEL-ut.jfif" /> */}
        <TweetLowerBar>
          <TweetIconCountContainer>
            <TweetLowerBarIconContainer>
              <FaRegComment />
            </TweetLowerBarIconContainer>
            <TweetCount>0</TweetCount>
          </TweetIconCountContainer>

          <TweetIconCountContainer IconColor="green">
            <TweetLowerBarIconContainer>
              <AiOutlineRetweet />
            </TweetLowerBarIconContainer>
            <TweetCount>{tweet.retweets}</TweetCount>
          </TweetIconCountContainer>

          <TweetIconCountContainer IconColor="red">
            <TweetLowerBarIconContainer onClick={() => handleLike(tweet._id)}>
              {likesArray &&
              localStorage.getItem("user") &&
              likesArray.includes(
                JSON.parse(localStorage.getItem("user"))._id
              ) ? (
                <AiFillHeart color="#eb0770" />
              ) : (
                <AiOutlineHeart />
              )}
            </TweetLowerBarIconContainer>
            <TweetCount>{likesArray.length}</TweetCount>
          </TweetIconCountContainer>

          <TweetLowerBarIconContainer>
            <FiShare />
          </TweetLowerBarIconContainer>
        </TweetLowerBar>
      </TweetBody>
    </TweetContainer>
  );
}

export default Tweet;
