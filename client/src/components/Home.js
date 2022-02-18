import React from "react";
import {
  HomeNavbar,
  HomeNavbarText,
  HomeNavbarTextPhotoContainer,
  HomeUserPhotoContainer,
  StyledHome,
} from "./styles/Home.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import NewTweet from "./NewTweet";
import ShowNewTweets from "./ShowNewTweets";
import Tweet from "./Tweet";
import { UserPhoto } from "./styles/NewTweet.styled";

function Home() {
  return (
    <StyledHome>
      <HomeNavbar>
        <HomeNavbarTextPhotoContainer>
          <HomeUserPhotoContainer>
            <UserPhoto src="./images/user photo.jpg" />
          </HomeUserPhotoContainer>
          <HomeNavbarText>Home</HomeNavbarText>
        </HomeNavbarTextPhotoContainer>
        <FontAwesomeIcon icon={faStar} size="lg"></FontAwesomeIcon>
      </HomeNavbar>
      <NewTweet />
      <ShowNewTweets />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </StyledHome>
  );
}

export default Home;
