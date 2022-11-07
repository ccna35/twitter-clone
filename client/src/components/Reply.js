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
  TweetPopUp,
  TweetPopUpIconContainer,
  TweetPopUpOption,
  TweetPopUpText,
  TweetText,
  TweetUpperBar,
  TweetUpperBarIconContainer,
  UserHandle,
  UserName,
  UserVerifiedIconContainer,
} from "./styles/Tweet.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineRetweet,
  AiFillPushpin,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, reset } from "../features/user/userSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { likeTweet, deleteTweet, retweet } from "../features/tweets/tweetSlice";
import { useRef } from "react";
import useOnClickOutside from "../custom hooks/useOnClickOutside";
import { ReplyingTo } from "./styles/NewReply.styled";
import { deleteReply } from "../features/replies/replySlice";

function Reply({ reply, username }) {
  //   const [likesArray, setLikesArray] = useState([...tweet.likes]);
  //   const [retweetsArray, setRetweetsArray] = useState([...tweet.retweets]);
  // Handles Tweet Popup state
  const [popup, setPopup] = useState(false);

  const [replyUser, setReplyUser] = useState({});

  const tweetRef = useRef(); // Left Panel ref.

  // This custom hook closes the modal or popup if the user clicked outside of them.
  useOnClickOutside(tweetRef, () => setPopup(false)); // This hook is related to themes modal.

  // console.log(reply._doc.createdAt);
  // const date1 = new Date(reply.createdAt);
  // const timeDiff = Date.now() - Date.parse(date1);
  // const timePosted = Math.floor(timeDiff / (1000 * 60));

  const { fullUserData, isUserLoading } = useSelector((state) => state.user);

  // const replyUser = users.find((user) => user._id === reply.user);

  // console.log(replyUser);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserData(reply.username)).then((data) => console.log(data));

  //   dispatch(reset());
  // }, [dispatch]);

  //   const handleLike = (tweetID) => {
  //     if (localStorage.getItem("user")) {
  //       if (!likesArray.includes(JSON.parse(localStorage.getItem("user"))._id)) {
  //         setLikesArray([
  //           ...likesArray,
  //           JSON.parse(localStorage.getItem("user"))._id,
  //         ]);
  //         const data = {
  //           tweetID,
  //           userID: JSON.parse(localStorage.getItem("user"))._id,
  //           didUserLikeThisTweet: false,
  //         };

  //         dispatch(likeTweet(data));
  //       } else {
  //         setLikesArray((prev) =>
  //           prev.filter(
  //             (userID) => userID !== JSON.parse(localStorage.getItem("user"))._id
  //           )
  //         );
  //         const data = {
  //           tweetID,
  //           userID: JSON.parse(localStorage.getItem("user"))._id,
  //           didUserLikeThisTweet: true,
  //         };

  //         dispatch(likeTweet(data));
  //       }
  //     }
  //   };

  //   const handleRetweet = (tweetID) => {
  //     if (localStorage.getItem("user")) {
  //       if (
  //         !retweetsArray.includes(JSON.parse(localStorage.getItem("user"))._id)
  //       ) {
  //         setRetweetsArray([
  //           ...retweetsArray,
  //           JSON.parse(localStorage.getItem("user"))._id,
  //         ]);
  //         const data = {
  //           tweetID,
  //           userID: JSON.parse(localStorage.getItem("user"))._id,
  //           didUserRetweetThisTweet: false,
  //         };

  //         dispatch(retweet(data));
  //       } else {
  //         setRetweetsArray((prev) =>
  //           prev.filter(
  //             (userID) => userID !== JSON.parse(localStorage.getItem("user"))._id
  //           )
  //         );
  //         const data = {
  //           tweetID,
  //           userID: JSON.parse(localStorage.getItem("user"))._id,
  //           didUserRetweetThisTweet: true,
  //         };

  //         dispatch(retweet(data));
  //       }
  //     }
  //   };

  const handleDelete = (id) => {
    console.log(id);
    if (
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user"))._id === reply.user
    ) {
      dispatch(deleteReply(id)).then((data) => console.log(data));
      setPopup((prev) => !prev);
    }
  };
  return (
    <TweetContainer>
      <UserPhotoContainer>
        {
          <Link
            to={
              "/" + replyUser.username ||
              JSON.parse(localStorage.getItem("user")).username
            }
          >
            <UserPhoto
              src={
                replyUser.profilePhoto ||
                JSON.parse(localStorage.getItem("user")).profilePhoto ||
                "http://localhost:3000/images/blank-profile-picture-gf8e58e24f_640.png"
              }
            />
          </Link>
        }
      </UserPhotoContainer>
      <TweetBody reply>
        <TweetUpperBar>
          <TweetInfoContainer>
            <UserName>
              <TweetAuthor>
                {
                  <Link
                    to={
                      "/" + replyUser.username ||
                      JSON.parse(localStorage.getItem("user")).username
                    }
                  >
                    {replyUser.name ||
                      JSON.parse(localStorage.getItem("user")).name}
                  </Link>
                }
              </TweetAuthor>
              {Object.keys(fullUserData).length > 0 && fullUserData.isVerified && (
                <UserVerifiedIconContainer>
                  <MdVerified />
                </UserVerifiedIconContainer>
              )}
            </UserName>
            <UserHandle>
              @
              {replyUser.username ||
                JSON.parse(localStorage.getItem("user")).username}
            </UserHandle>
            {/* <TimeSincePosted>
              {timePosted < 60
                ? timePosted + "m"
                : timePosted >= 60 && timePosted <= 1440
                ? Math.floor(timePosted / 60) + "h"
                : Math.floor(timePosted / 1440) + "d"}
            </TimeSincePosted> */}
          </TweetInfoContainer>
          <TweetUpperBarIconContainer
            onClick={() => setPopup((prev) => !prev)}
            ref={tweetRef}
          >
            <FontAwesomeIcon icon={faEllipsis} size="lg"></FontAwesomeIcon>
            {popup && (
              <TweetPopUp>
                <TweetPopUpOption onClick={() => handleDelete(reply._id)} red>
                  <TweetPopUpIconContainer>
                    <IoTrashOutline />
                  </TweetPopUpIconContainer>
                  <TweetPopUpText>Delete</TweetPopUpText>
                </TweetPopUpOption>
                <TweetPopUpOption>
                  <TweetPopUpIconContainer>
                    <AiFillPushpin />
                  </TweetPopUpIconContainer>
                  <TweetPopUpText>Pin to your profile</TweetPopUpText>
                </TweetPopUpOption>
              </TweetPopUp>
            )}
          </TweetUpperBarIconContainer>
        </TweetUpperBar>
        <ReplyingTo removeMargin>
          Replying to <Link to={"/" + username}>@{username}</Link>
        </ReplyingTo>
        <TweetText>{reply.text}</TweetText>
        {/* {tweet.image && <TweetImage src={tweet.image} />} */}
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
            <TweetCount>0</TweetCount>
          </TweetIconCountContainer>

          <TweetIconCountContainer IconColor="red">
            <TweetLowerBarIconContainer>
              <AiFillHeart color="#eb0770" />
            </TweetLowerBarIconContainer>
            <TweetCount>0</TweetCount>
          </TweetIconCountContainer>

          <TweetLowerBarIconContainer>
            <FiShare />
          </TweetLowerBarIconContainer>
        </TweetLowerBar>
      </TweetBody>
    </TweetContainer>
  );
}

export default Reply;
