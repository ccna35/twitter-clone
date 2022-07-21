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
import { getUserData } from "../features/user/userSlice";
import { TweetsContainer } from "../components/styles/Home.styled";
import Spinner from "../components/Spinner";
import useFetchUserData from "../custom hooks/useFetchUserData";
import LoadingScreen from "../components/LoadingScreen";
import { FollowUserBtn } from "../components/styles/Button.styled";
import EditProfile from "../components/Modals/EditProfile";

function User() {
  const navigate = useNavigate();

  const [editProfileModal, setEditProfileModal] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const { tweets, isLoading } = useSelector((state) => state.tweet);
  const { username } = useParams();
  const { fullUserData, isUserLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    const userData = {
      username,
    };
    dispatch(getAllTweets(userData));
    dispatch(getUserData(username));
  }, [user, dispatch, navigate]);

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
            {fullUserData.length > 0 && fullUserData[0].name}
          </UserNavbarFullName>
          <UserNavbarTweetCount>{tweets.length} Tweets</UserNavbarTweetCount>
        </UserNavbarInfo>
      </UserNavBar>

      <UserPhotoCoverContainer>
        <UserCoverContainer>
          <UserCover
            src={
              fullUserData.length > 0 && fullUserData[0].profilePhoto
                ? fullUserData[0].profilePhoto
                : "./images/950x350-light-gray-solid-color-background.jpg"
            }
          />
        </UserCoverContainer>

        <UserPhotoContainer>
          <UserPhoto
            src={
              fullUserData.length > 0 && fullUserData[0].profilePhoto
                ? fullUserData[0].profilePhoto
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
          <FollowUserBtn>Follow</FollowUserBtn>
        )}

        <UserNavbarInfo>
          <UserNavbarFullName>
            {fullUserData.length > 0 && fullUserData[0].name}
          </UserNavbarFullName>
          <UserNavbarTweetCount>
            @{fullUserData.length > 0 && fullUserData[0].username}
          </UserNavbarTweetCount>
        </UserNavbarInfo>
        {fullUserData.length > 0 && fullUserData[0].bio && (
          <UserProfileDescription>{fullUserData[0].bio}</UserProfileDescription>
        )}

        <UserProfileAboutContainer>
          {fullUserData.length > 0 && fullUserData[0].country && (
            <AboutSingleContainer>
              <>
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                <AboutSingleText>{fullUserData[0].country}</AboutSingleText>
              </>
            </AboutSingleContainer>
          )}
          <AboutSingleContainer>
            <FontAwesomeIcon icon={faBirthdayCake}></FontAwesomeIcon>
            <AboutSingleText>
              Born{" "}
              {fullUserData.length > 0 &&
                fullUserData[0].birthDate.month +
                  " " +
                  fullUserData[0].birthDate.day +
                  ", " +
                  fullUserData[0].birthDate.year}
            </AboutSingleText>
          </AboutSingleContainer>
          <AboutSingleContainer>
            <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            <AboutSingleText>
              Joined{" "}
              {fullUserData.length > 0 &&
                new Date(fullUserData[0].joinDate).toString().split(" ")[1] +
                  " " +
                  new Date(fullUserData[0].joinDate).toString().split(" ")[3]}
            </AboutSingleText>
          </AboutSingleContainer>
        </UserProfileAboutContainer>
        <FollowingFollowersContainer>
          <FollowContainer>
            <FollowCount>
              {fullUserData.length > 0 && fullUserData[0].following}
            </FollowCount>
            <FollowText>Following</FollowText>
          </FollowContainer>
          <FollowContainer>
            <FollowCount>
              {fullUserData.length > 0 && fullUserData[0].followers}
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
