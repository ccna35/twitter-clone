import React, { useEffect, useState } from "react";
import {
  UserNavbarIconContainer,
  UserNavBar,
  UserNavbarFullName,
  UserNavbarInfo,
  UserNavbarTweetCount,
  UserStyle,
  UserPhotoCoverContainer,
  UserCoverContainer,
  UserCover,
  UserPhotoContainer,
  UserPhoto,
  UserProfileInfoContainer,
  UserProfileDescription,
  UserProfileAboutContainer,
  AboutSingleContainer,
  AboutSingleText,
  FollowingFollowersContainer,
  FollowContainer,
  FollowCount,
  FollowText,
  TweetsRepliesBarContainer,
  TweetsRepliesBarItem,
  TweetsRepliesBarText,
} from "../components/styles/User.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMapMarkerAlt,
  faCalendarAlt,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import { EditProfileBtn } from "../components/styles/Button.styled";
import Tweet from "../components/Tweet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "../features/tweets/tweetSlice";
import { getUserData, followProcess } from "../features/user/userSlice";
import { TweetsContainer } from "../components/styles/Home.styled";
import Spinner from "../components/Spinner";
import useFetchUserData from "../custom hooks/useFetchUserData";
import LoadingScreen from "../components/LoadingScreen";
import { FollowUserBtn } from "../components/styles/Button.styled";
import EditProfile from "../components/Modals/EditProfile";
import { FiLink } from "react-icons/fi";

function User() {
  const navigate = useNavigate();

  const [editProfileModal, setEditProfileModal] = useState(false);
  const [followingArray, setFollowingArray] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const { tweets, isLoading } = useSelector((state) => state.tweet);
  const { fullUserData, isUserLoading } = useSelector((state) => state.user);

  const { username } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    const userData = {
      username,
    };
    dispatch(getAllTweets(userData));
    dispatch(getUserData(username)).then((data) =>
      setFollowingArray([...data.payload[0].following])
    );
  }, [user, dispatch, navigate]);

  // Object.keys(fullUserData).length > 0 && console.log(fullUserData.following);

  // const userFollowing = [...JSON.parse(localStorage.getItem("user")).following];

  // localStorage.setItem("following", userFollowing);

  // const [followingArray, setFollowingArray] = useState([
  //   ...fullUserData.following,
  // ]);

  // if (Object.keys(fullUserData).length > 0) {
  //   // setFollowingArray([...fullUserData.following]);
  //   console.log(fullUserData.following);
  // }

  // console.log(typeof fullUserData.following);

  // const handleFollow = () => {
  //   console.log("hey");
  //   console.log(username);
  //   if (!followingArray.includes(username)) {
  //     setFollowingArray((prev) => [...prev, username]);
  //     console.log("user followed");

  //     console.log(followingArray);
  //   } else {
  //     setFollowingArray((prev) => prev.filter((user) => user !== username));
  //     console.log("user unfollowed");
  //     console.log(followingArray);
  //   }
  // };

  const handleFollow = (username) => {
    if (localStorage.getItem("user")) {
      if (
        !followingArray.includes(
          JSON.parse(localStorage.getItem("user")).username
        )
      ) {
        setFollowingArray([
          ...followingArray,
          JSON.parse(localStorage.getItem("user")).username,
        ]);
        const data = {
          username,
          userID: JSON.parse(localStorage.getItem("user"))._id,
          didIfollowThisUser: false,
        };

        dispatch(followProcess(data));
      } else {
        setFollowingArray((prev) =>
          prev.filter(
            (userID) =>
              userID !== JSON.parse(localStorage.getItem("user")).username
          )
        );
        const data = {
          username,
          userID: JSON.parse(localStorage.getItem("user"))._id,
          didIfollowThisUser: true,
        };

        dispatch(followProcess(data));
      }
    }
  };

  return (
    <UserStyle>
      {editProfileModal && (
        <EditProfile setEditProfileModal={setEditProfileModal} />
      )}
      <UserNavBar>
        <UserNavbarIconContainer onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </UserNavbarIconContainer>

        <UserNavbarInfo>
          <UserNavbarFullName>
            {Object.keys(fullUserData).length > 0 && fullUserData.name}
          </UserNavbarFullName>
          <UserNavbarTweetCount>{tweets.length} Tweets</UserNavbarTweetCount>
        </UserNavbarInfo>
      </UserNavBar>

      <UserPhotoCoverContainer>
        <UserCoverContainer>
          <UserCover
            src={
              Object.keys(fullUserData).length > 0 && fullUserData.coverPhoto
                ? fullUserData.coverPhoto
                : "./images/950x350-light-gray-solid-color-background.jpg"
            }
          />
        </UserCoverContainer>

        <UserPhotoContainer>
          <UserPhoto
            src={
              Object.keys(fullUserData).length > 0 && fullUserData.profilePhoto
                ? fullUserData.profilePhoto
                : "./images/blank-profile-picture-gf8e58e24f_640.png"
            }
          />
        </UserPhotoContainer>
      </UserPhotoCoverContainer>

      <UserProfileInfoContainer>
        {user &&
        localStorage.getItem("user") &&
        JSON.parse(localStorage.getItem("user")).username === username ? (
          <EditProfileBtn onClick={() => setEditProfileModal((prev) => !prev)}>
            Edit Profile
          </EditProfileBtn>
        ) : (
          <FollowUserBtn onClick={handleFollow}>
            {followingArray.includes(username) ? "Following" : "Follow"}
          </FollowUserBtn>
        )}

        <UserNavbarInfo>
          <UserNavbarFullName>
            {Object.keys(fullUserData).length > 0 && fullUserData.name}
          </UserNavbarFullName>
          <UserNavbarTweetCount>
            @{Object.keys(fullUserData).length > 0 && fullUserData.username}
          </UserNavbarTweetCount>
        </UserNavbarInfo>
        {Object.keys(fullUserData).length > 0 && fullUserData.bio && (
          <UserProfileDescription>{fullUserData.bio}</UserProfileDescription>
        )}

        <UserProfileAboutContainer>
          {Object.keys(fullUserData).length > 0 && fullUserData.country && (
            <AboutSingleContainer>
              <>
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                <AboutSingleText>{fullUserData.country}</AboutSingleText>
              </>
            </AboutSingleContainer>
          )}
          {Object.keys(fullUserData).length > 0 && fullUserData.website && (
            <AboutSingleContainer>
              <>
                <FiLink />
                <a href={fullUserData.website} target="_blank">
                  <AboutSingleText link>{fullUserData.website}</AboutSingleText>
                </a>
              </>
            </AboutSingleContainer>
          )}
          <AboutSingleContainer>
            <FontAwesomeIcon icon={faBirthdayCake}></FontAwesomeIcon>
            <AboutSingleText>
              Born{" "}
              {Object.keys(fullUserData).length > 0 &&
                fullUserData.birthDate.month +
                  " " +
                  fullUserData.birthDate.day +
                  ", " +
                  fullUserData.birthDate.year}
            </AboutSingleText>
          </AboutSingleContainer>
          <AboutSingleContainer>
            <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            <AboutSingleText>
              Joined{" "}
              {Object.keys(fullUserData).length > 0 &&
                new Date(fullUserData.joinDate).toString().split(" ")[1] +
                  " " +
                  new Date(fullUserData.joinDate).toString().split(" ")[3]}
            </AboutSingleText>
          </AboutSingleContainer>
        </UserProfileAboutContainer>
        <FollowingFollowersContainer>
          <FollowContainer>
            <FollowCount>
              {Object.keys(fullUserData).length > 0 && fullUserData.following}
            </FollowCount>
            <FollowText>Following</FollowText>
          </FollowContainer>
          <FollowContainer>
            <FollowCount>
              {Object.keys(fullUserData).length > 0 && fullUserData.followers}
            </FollowCount>
            <FollowText>Followers</FollowText>
          </FollowContainer>
        </FollowingFollowersContainer>
      </UserProfileInfoContainer>

      <TweetsRepliesBarContainer>
        <TweetsRepliesBarItem
          lovely
          onClick={(e) => console.log(e.target.hasAttributes())}
        >
          <TweetsRepliesBarText active>Tweets</TweetsRepliesBarText>
        </TweetsRepliesBarItem>
        <TweetsRepliesBarItem>
          <TweetsRepliesBarText>Tweets & Replies</TweetsRepliesBarText>
        </TweetsRepliesBarItem>
        <TweetsRepliesBarItem>
          <TweetsRepliesBarText>Media</TweetsRepliesBarText>
        </TweetsRepliesBarItem>
        <TweetsRepliesBarItem>
          <TweetsRepliesBarText>Likes</TweetsRepliesBarText>
        </TweetsRepliesBarItem>
      </TweetsRepliesBarContainer>

      {isLoading ? (
        <TweetsContainer>
          <Spinner />
        </TweetsContainer>
      ) : (
        tweets.map((tweet) => (
          <Tweet tweet={tweet} key={tweet._id} username={username} />
        ))
      )}
    </UserStyle>
  );
}

export default User;
