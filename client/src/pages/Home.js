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
import Spinner from "../components/Spinner";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080/");

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { tweets, isLoading } = useSelector((state) => state.tweet);

  const [isNewTweet, setIsNewTweet] = useState(false);
  const [newTweets, setNewTweets] = useState({});

  socket.on("newTweet3", (data) => {
    setIsNewTweet(true);
    setNewTweets(data);
    console.log(newTweets);
  });

  useEffect(() => {
    if (user) {
      navigate("/home");
      const userData = {
        username: JSON.parse(localStorage.getItem("user")).username,
      };
      dispatch(getAllTweets(userData));
    } else {
      navigate("/");
    }

    dispatch(reset());
  }, [user, dispatch, navigate]);

  // console.log(JSON.parse(localStorage.getItem("user")).username);

  return (
    <StyledHome>
      <HomeNavbar>
        <HomeNavbarTextPhotoContainer>
          <Link
            to={"/" + user && JSON.parse(localStorage.getItem("user")).username}
          >
            <HomeUserPhotoContainer>
              <UserPhoto src="./images/user-photo.jpg" />
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
      {/* {isNewTweet &&
        newTweets &&
        newTweets.map((tweet) => <Tweet tweet={tweet} key={tweet._id} />)} */}
    </StyledHome>
  );
}

export default Home;
