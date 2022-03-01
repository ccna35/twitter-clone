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
import { faEarth, faImage } from "@fortawesome/free-solid-svg-icons";
import { MainTweetBtn } from "./styles/Button.styled";
import { Link } from "react-router-dom";
import { AiOutlineFileGif, AiOutlineCalendar } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { CgPin } from "react-icons/cg";
import { BiPoll } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";

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
              <HiOutlinePhotograph size="1.25rem" />
            </TweetIconContainer>
            <TweetIconContainer>
              <AiOutlineFileGif size="1.25rem" />
            </TweetIconContainer>
            <TweetIconContainer>
              <BiPoll />
            </TweetIconContainer>
            <TweetIconContainer>
              <FaRegSmile size="1.25rem" />
            </TweetIconContainer>
            <TweetIconContainer>
              <AiOutlineCalendar size="1.25rem" />
            </TweetIconContainer>
            <TweetIconContainer>
              <CgPin />
            </TweetIconContainer>
          </TweetIconsContainer>
          <MainTweetBtn>Tweet</MainTweetBtn>
        </TweetOptionsContainer>
      </TweetForm>
    </NewTweetStyle>
  );
}

export default NewTweet;
