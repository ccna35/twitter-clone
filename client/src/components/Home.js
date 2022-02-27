import React from "react";
import {
  HomeNavbar,
  HomeNavbarText,
  HomeNavbarTextPhotoContainer,
  HomeUserPhotoContainer,
  StyledHome,
} from "./styles/Home.styled";
import NewTweet from "./NewTweet";
import ShowNewTweets from "./ShowNewTweets";
import Tweet from "./Tweet";
import { UserPhoto } from "./styles/NewTweet.styled";
import { Link } from "react-router-dom";
import { BsStars } from "react-icons/bs";

function Home() {
  return (
    <StyledHome>
      <HomeNavbar>
        <HomeNavbarTextPhotoContainer>
          <Link to="/user">
            <HomeUserPhotoContainer>
              <UserPhoto src="./images/user photo.jpg" />
            </HomeUserPhotoContainer>
          </Link>
          <HomeNavbarText>Home</HomeNavbarText>
        </HomeNavbarTextPhotoContainer>
        <BsStars />
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
