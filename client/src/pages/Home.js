import React, { useEffect, useState } from "react";
import {
  HomeNavbar,
  HomeNavbarText,
  HomeNavbarTextPhotoContainer,
  HomeUserPhotoContainer,
  StyledHome,
  TweetsContainer,
} from "../components/styles/Home.styled";
import NewTweet from "../components/NewTweet";
import ShowNewTweets from "../components/ShowNewTweets";
import Tweet from "../components/Tweet";
import { UserPhoto } from "../components/styles/NewTweet.styled";
import { Link } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../features/auth/authSlice";
import { getAllTweets } from "../features/tweets/tweetSlice";
import { getUserData } from "../features/user/userSlice";
import Spinner from "../components/Spinner";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { tweets, isLoading } = useSelector((state) => state.tweet);
  const { fullUserData, isUserLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/home");
      const userData = {
        username: JSON.parse(localStorage.getItem("user")).username,
      };
      dispatch(getAllTweets(userData));
      dispatch(getUserData(userData.username));
    } else {
      navigate("/");
    }

    dispatch(reset());
    console.log("useEffect");
  }, [user, dispatch, navigate]);

  return (
    <StyledHome>
      <HomeNavbar>
        <HomeNavbarTextPhotoContainer>
          <Link to={"/" + JSON.parse(localStorage.getItem("user")).username}>
            <HomeUserPhotoContainer>
              <UserPhoto
                src={
                  fullUserData.length > 0 && fullUserData[0].profilePhoto
                    ? fullUserData[0].profilePhoto
                    : "./images/blank-profile-picture-gf8e58e24f_640.png"
                }
              />
            </HomeUserPhotoContainer>
          </Link>
          <HomeNavbarText>Home</HomeNavbarText>
        </HomeNavbarTextPhotoContainer>
        <BsStars />
      </HomeNavbar>
      <NewTweet />
      <ShowNewTweets />

      {isLoading ? (
        <TweetsContainer>
          <Spinner />
        </TweetsContainer>
      ) : (
        tweets.map((tweet) => <Tweet tweet={tweet} key={tweet._id} />)
      )}
    </StyledHome>
  );
}

export default Home;
