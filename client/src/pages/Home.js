import React, { useEffect } from "react";
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

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { tweets, isLoading } = useSelector((state) => state.tweet);

  useEffect(() => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/");
    }

    dispatch(reset());
    const userData = {
      id: JSON.parse(user)._id,
    };
    console.log(userData);
    dispatch(getAllTweets(userData));
  }, [user, dispatch, navigate]);

  return (
    <StyledHome>
      <HomeNavbar>
        <HomeNavbarTextPhotoContainer>
          <Link to="/user">
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
    </StyledHome>
  );
}

export default Home;
