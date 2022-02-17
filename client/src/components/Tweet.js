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
import {
  faEllipsis,
  faCheckCircle,
  faComment,
  faRetweet,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

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
              ZDNet{" "}
              <FontAwesomeIcon
                icon={faCheckCircle}
                color="#1d9bf0"
              ></FontAwesomeIcon>
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
              <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
            </TweetLowerBarIconContainer>
            <TweetCount>15</TweetCount>
          </TweetIconCountContainer>

          <TweetIconCountContainer TextColor="green">
            <TweetLowerBarIconContainer IconColor="green">
              <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>
            </TweetLowerBarIconContainer>
            <TweetCount>35</TweetCount>
          </TweetIconCountContainer>

          <TweetIconCountContainer TextColor="red">
            <TweetLowerBarIconContainer IconColor="red">
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </TweetLowerBarIconContainer>
            <TweetCount>345</TweetCount>
          </TweetIconCountContainer>

          <TweetLowerBarIconContainer>
            <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
          </TweetLowerBarIconContainer>
        </TweetLowerBar>
      </TweetBody>
    </TweetContainer>
  );
}

export default Tweet;
