import React from "react";
import { UserPhoto, UserPhotoContainer } from "./styles/NewTweet.styled";
import {
  TimeSincePosted,
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
} from "./styles/Tweet.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FiShare } from "react-icons/fi";

function Tweet() {
  return (
    <TweetContainer>
      <UserPhotoContainer>
        <UserPhoto src="./images/zdnet.jpg" />
      </UserPhotoContainer>
      <TweetBody>
        <TweetUpperBar>
          <TweetInfoContainer>
            <UserName>
              ZDNet <MdVerified color="#1d9bf0" />
            </UserName>
            <UserHandle>@ZDNet</UserHandle>
            <TimeSincePosted>4h</TimeSincePosted>
          </TweetInfoContainer>
          <TweetUpperBarIconContainer>
            <FontAwesomeIcon icon={faEllipsis} size="lg"></FontAwesomeIcon>
          </TweetUpperBarIconContainer>
        </TweetUpperBar>
        <TweetText>
          Motorola thinks VR headsets and AR glasses can be greatly simplified
          by moving processing power, communications, and audio to a separate
          device worn around the neck.
        </TweetText>
        <TweetImage src="./images/FLo3hQmXwAEL-ut.jfif" />
        <TweetLowerBar>
          <TweetIconCountContainer>
            <TweetLowerBarIconContainer>
              <FaRegComment />
            </TweetLowerBarIconContainer>
            <TweetCount>15</TweetCount>
          </TweetIconCountContainer>

          <TweetIconCountContainer TextColor="green">
            <TweetLowerBarIconContainer IconColor="green">
              <AiOutlineRetweet />
            </TweetLowerBarIconContainer>
            <TweetCount>35</TweetCount>
          </TweetIconCountContainer>

          <TweetIconCountContainer TextColor="red">
            <TweetLowerBarIconContainer IconColor="red">
              <AiOutlineHeart />
            </TweetLowerBarIconContainer>
            <TweetCount>345</TweetCount>
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
