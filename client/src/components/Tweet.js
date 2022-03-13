import React from "react";
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

function Tweet({ tweet }) {
  const date1 = new Date(tweet.createdAt);
  const timeDiff = Date.now() - Date.parse(date1);

  console.log(timeDiff / (1000 * 60));
  return (
    <TweetContainer>
      <UserPhotoContainer>
        <UserPhoto src="./images/zdnet.jpg" />
      </UserPhotoContainer>
      <TweetBody>
        <TweetUpperBar>
          <TweetInfoContainer>
            <UserName>
              <TweetAuthor>ZDNet</TweetAuthor>
              <UserVerifiedIconContainer>
                <MdVerified />
              </UserVerifiedIconContainer>
            </UserName>
            <UserHandle>@ZDNet</UserHandle>
            <TimeSincePosted>4h</TimeSincePosted>
          </TweetInfoContainer>
          <TweetUpperBarIconContainer>
            <FontAwesomeIcon icon={faEllipsis} size="lg"></FontAwesomeIcon>
          </TweetUpperBarIconContainer>
        </TweetUpperBar>
        <TweetText>{tweet.text}</TweetText>
        <TweetImage src="./images/FLo3hQmXwAEL-ut.jfif" />
        <TweetLowerBar>
          <TweetIconCountContainer>
            <TweetLowerBarIconContainer>
              <FaRegComment />
            </TweetLowerBarIconContainer>
            <TweetCount>15</TweetCount>
          </TweetIconCountContainer>

          <TweetIconCountContainer IconColor="green">
            <TweetLowerBarIconContainer>
              <AiOutlineRetweet />
            </TweetLowerBarIconContainer>
            <TweetCount>{tweet.retweets}</TweetCount>
          </TweetIconCountContainer>

          <TweetIconCountContainer IconColor="red">
            <TweetLowerBarIconContainer>
              {/* <AiFillHeart color="#eb0770" /> */}
              <AiOutlineHeart />
            </TweetLowerBarIconContainer>
            <TweetCount>{tweet.likes}</TweetCount>
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
