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
import { useSelector, useDispatch } from "react-redux";
import { like } from "../actions";

function Tweet() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

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

          <TweetIconCountContainer IconColor="green">
            <TweetLowerBarIconContainer>
              <AiOutlineRetweet />
            </TweetLowerBarIconContainer>
            <TweetCount>35</TweetCount>
          </TweetIconCountContainer>

          <TweetIconCountContainer
            IconColor="red"
            onClick={() => dispatch(like())}
          >
            <TweetLowerBarIconContainer>
              {counter ? <AiFillHeart color="#eb0770" /> : <AiOutlineHeart />}
            </TweetLowerBarIconContainer>
            <TweetCount active={counter && "yes"}>
              {counter ? "5" : "4"}
            </TweetCount>
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
