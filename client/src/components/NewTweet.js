import React from "react";
import {
  NewTweetStyle,
  TweetForm,
  TweetIconContainer,
  TweetIconsContainer,
  TweetInput,
  TweetOptionsContainer,
  UserPhoto,
  UserPhotoContainer,
  WhoCanReplyContainer,
  WhoCanReplyText,
} from "./styles/NewTweet.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faImage,
  faPoll,
  faSmile,
  faCalendar,
  faLocationDot,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { MainTweetBtn } from "./styles/Button.styled";
import { Link } from "react-router-dom";

function NewTweet() {
  return (
    <NewTweetStyle>
      <Link to="/user">
        <UserPhotoContainer>
          <UserPhoto src="./images/user photo.jpg" />
        </UserPhotoContainer>
      </Link>

      <TweetForm>
        <TweetInput type="text" placeholder="What’s happening" />
        <WhoCanReplyContainer>
          <FontAwesomeIcon icon={faEarth}></FontAwesomeIcon>
          <WhoCanReplyText>Everyone can reply</WhoCanReplyText>
        </WhoCanReplyContainer>
        <TweetOptionsContainer>
          <TweetIconsContainer>
            <TweetIconContainer>
              <FontAwesomeIcon icon={faImage} size="lg"></FontAwesomeIcon>
            </TweetIconContainer>
            <TweetIconContainer>
              <FontAwesomeIcon icon={faPhotoFilm} size="lg"></FontAwesomeIcon>
            </TweetIconContainer>
            <TweetIconContainer>
              <FontAwesomeIcon icon={faPoll} size="lg"></FontAwesomeIcon>
            </TweetIconContainer>
            <TweetIconContainer>
              <FontAwesomeIcon icon={faSmile} size="lg"></FontAwesomeIcon>
            </TweetIconContainer>
            <TweetIconContainer>
              <FontAwesomeIcon icon={faCalendar} size="lg"></FontAwesomeIcon>
            </TweetIconContainer>
            <TweetIconContainer>
              <FontAwesomeIcon icon={faLocationDot} size="lg"></FontAwesomeIcon>
            </TweetIconContainer>
          </TweetIconsContainer>
          <MainTweetBtn>Tweet</MainTweetBtn>
        </TweetOptionsContainer>
      </TweetForm>
    </NewTweetStyle>
  );
}

export default NewTweet;
