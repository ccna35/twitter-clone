import React, { useEffect } from "react";
import {
  UserPhoto,
  UserPhotoContainer,
} from "../components/styles/NewTweet.styled";
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
  TweetPhotoNameContainer,
  TweetPopUp,
  TweetPopUpIconContainer,
  TweetPopUpOption,
  TweetPopUpText,
  TweetText,
  TweetUpperBar,
  TweetUpperBarIconContainer,
  UserHandle,
  UserName,
  UserVerifiedIconContainer,
} from "../components/styles/Tweet.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineRetweet,
  AiFillPushpin,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../features/user/userSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  likeTweet,
  deleteTweet,
  retweet,
  getSingleTweet,
  reset,
} from "../features/tweets/tweetSlice";
import { useRef } from "react";
import useOnClickOutside from "../custom hooks/useOnClickOutside";
import {
  HomeNavbarText,
  HomeNavbar,
  HomeNavbarTextPhotoContainer,
  HomeUserPhotoContainer,
  TweetsContainer,
} from "../components/styles/Home.styled";
import { TweetPageContainer } from "../components/styles/TweetPage.styled";
import { UserNavbarIconContainer } from "../components/styles/User.styled";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import Spinner from "../components/Spinner";
import NewReply from "../components/NewReply";

function TweetPage() {
  const navigate = useNavigate();
  const { tweetID, username } = useParams();

  const { tweet, isLoading } = useSelector((state) => state.tweet);
  const [likesArray, setLikesArray] = useState([]);
  const [retweetsArray, setRetweetsArray] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleTweet(tweetID)).then(function (data) {
      return setLikesArray([...data.payload.likes]);
      setRetweetsArray([...data.payload.retweets]);
    });

    dispatch(getUserData(username));

    dispatch(reset());
  }, [dispatch]);

  // Handles Tweet Popup state
  const [popup, setPopup] = useState(false);

  const tweetRef = useRef(); // Left Panel ref.

  // This custom hook closes the modal or popup if the user clicked outside of them.
  useOnClickOutside(tweetRef, () => setPopup(false)); // This hook is related to themes modal.
  // const monthNames = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "June",
  //   "July",
  //   "Aug",
  //   "Sep",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  // ];
  const date1 = new Date(tweet.createdAt);

  const { fullUserData, isUserLoading } = useSelector((state) => state.user);

  const handleLike = (tweetID) => {
    if (localStorage.getItem("user")) {
      if (!likesArray.includes(JSON.parse(localStorage.getItem("user"))._id)) {
        setLikesArray([
          ...likesArray,
          JSON.parse(localStorage.getItem("user"))._id,
        ]);
        const data = {
          tweetID,
          userID: JSON.parse(localStorage.getItem("user"))._id,
          didUserLikeThisTweet: false,
        };

        dispatch(likeTweet(data));
      } else {
        setLikesArray((prev) =>
          prev.filter(
            (userID) => userID !== JSON.parse(localStorage.getItem("user"))._id
          )
        );
        const data = {
          tweetID,
          userID: JSON.parse(localStorage.getItem("user"))._id,
          didUserLikeThisTweet: true,
        };

        dispatch(likeTweet(data));
      }
    }
  };

  const handleRetweet = (tweetID) => {
    if (localStorage.getItem("user")) {
      if (
        !retweetsArray.includes(JSON.parse(localStorage.getItem("user"))._id)
      ) {
        setRetweetsArray([
          ...retweetsArray,
          JSON.parse(localStorage.getItem("user"))._id,
        ]);
        const data = {
          tweetID,
          userID: JSON.parse(localStorage.getItem("user"))._id,
          didUserRetweetThisTweet: false,
        };

        dispatch(retweet(data));
      } else {
        setRetweetsArray((prev) =>
          prev.filter(
            (userID) => userID !== JSON.parse(localStorage.getItem("user"))._id
          )
        );
        const data = {
          tweetID,
          userID: JSON.parse(localStorage.getItem("user"))._id,
          didUserRetweetThisTweet: true,
        };

        dispatch(retweet(data));
      }
    }
  };

  const handleDelete = (id) => {
    if (
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user"))._id === tweet.user
    ) {
      dispatch(deleteTweet(id)).then((data) => console.log(data));
      setPopup((prev) => !prev);
      navigate(-1);
    }
  };
  return (
    <>
      <TweetPageContainer>
        <HomeNavbar tweetPage>
          <UserNavbarIconContainer onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </UserNavbarIconContainer>
          <HomeNavbarTextPhotoContainer>
            <HomeNavbarText>Home</HomeNavbarText>
          </HomeNavbarTextPhotoContainer>
        </HomeNavbar>
        {isUserLoading ? (
          <TweetsContainer>
            <Spinner />
          </TweetsContainer>
        ) : (
          <TweetContainer tweetPage>
            <TweetUpperBar>
              <TweetPhotoNameContainer>
                <UserPhotoContainer>
                  {Object.keys(fullUserData).length > 0 && (
                    <Link to={"/" + fullUserData.username}>
                      <UserPhoto
                        src={
                          fullUserData.profilePhoto ||
                          "http://localhost:3000/images/blank-profile-picture-gf8e58e24f_640.png"
                        }
                      />
                    </Link>
                  )}
                </UserPhotoContainer>
                <TweetInfoContainer tweetPage>
                  <UserName>
                    <TweetAuthor>
                      {Object.keys(fullUserData).length > 0 && (
                        <Link to={"/" + fullUserData.username}>
                          {fullUserData.name}
                        </Link>
                      )}
                    </TweetAuthor>
                    {Object.keys(fullUserData).length > 0 &&
                      fullUserData.isVerified && (
                        <UserVerifiedIconContainer>
                          <MdVerified />
                        </UserVerifiedIconContainer>
                      )}
                  </UserName>
                  <UserHandle tweetPage>
                    @
                    {Object.keys(fullUserData).length > 0 &&
                      fullUserData.username}
                  </UserHandle>
                </TweetInfoContainer>
              </TweetPhotoNameContainer>
              <TweetUpperBarIconContainer
                onClick={() => setPopup((prev) => !prev)}
                ref={tweetRef}
              >
                <FontAwesomeIcon icon={faEllipsis} size="lg"></FontAwesomeIcon>
                {popup && (
                  <TweetPopUp>
                    <TweetPopUpOption
                      onClick={() => handleDelete(tweet._id)}
                      red
                    >
                      <TweetPopUpIconContainer>
                        <IoTrashOutline />
                      </TweetPopUpIconContainer>
                      <TweetPopUpText>Delete</TweetPopUpText>
                    </TweetPopUpOption>
                    <TweetPopUpOption>
                      <TweetPopUpIconContainer>
                        <AiFillPushpin />
                      </TweetPopUpIconContainer>
                      <TweetPopUpText>Pin to your profile</TweetPopUpText>
                    </TweetPopUpOption>
                  </TweetPopUp>
                )}
              </TweetUpperBarIconContainer>
            </TweetUpperBar>
            <TweetBody>
              <TweetText>{tweet.text}</TweetText>
              {tweet.image && <TweetImage src={tweet.image} />}

              <TimeSincePosted>
                <Moment format="hh:mm A . MMM DD, YYYY">{date1}</Moment>
              </TimeSincePosted>
              <TweetLowerBar>
                <TweetIconCountContainer>
                  <TweetLowerBarIconContainer>
                    <FaRegComment />
                  </TweetLowerBarIconContainer>
                  <TweetCount>0</TweetCount>
                </TweetIconCountContainer>

                <TweetIconCountContainer
                  IconColor="green"
                  active={
                    retweetsArray &&
                    localStorage.getItem("user") &&
                    retweetsArray.includes(
                      JSON.parse(localStorage.getItem("user"))._id
                    )
                  }
                >
                  <TweetLowerBarIconContainer
                    onClick={() => handleRetweet(tweet._id)}
                    active={
                      retweetsArray &&
                      localStorage.getItem("user") &&
                      retweetsArray.includes(
                        JSON.parse(localStorage.getItem("user"))._id
                      )
                    }
                  >
                    <AiOutlineRetweet />
                  </TweetLowerBarIconContainer>
                  <TweetCount>{retweetsArray.length}</TweetCount>
                </TweetIconCountContainer>

                <TweetIconCountContainer IconColor="red">
                  <TweetLowerBarIconContainer
                    onClick={() => handleLike(tweet._id)}
                  >
                    {likesArray &&
                    localStorage.getItem("user") &&
                    likesArray.includes(
                      JSON.parse(localStorage.getItem("user"))._id
                    ) ? (
                      <AiFillHeart color="#eb0770" />
                    ) : (
                      <AiOutlineHeart />
                    )}
                  </TweetLowerBarIconContainer>
                  <TweetCount
                    active={
                      likesArray &&
                      localStorage.getItem("user") &&
                      likesArray.includes(
                        JSON.parse(localStorage.getItem("user"))._id
                      )
                    }
                  >
                    {likesArray.length}
                  </TweetCount>
                </TweetIconCountContainer>

                <TweetLowerBarIconContainer>
                  <FiShare />
                </TweetLowerBarIconContainer>
              </TweetLowerBar>
            </TweetBody>
          </TweetContainer>
        )}
        <NewReply username={username} />
      </TweetPageContainer>
    </>
  );
}

export default TweetPage;
