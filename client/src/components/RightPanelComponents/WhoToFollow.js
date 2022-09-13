import React, { useEffect, useState } from "react";
import {
  FollowUserContainer,
  FollowUserHandle,
  FollowUserInfo,
  FollowUserName,
  WhoToFollowContainer,
  WhoToFollowHeader,
} from "../styles/RightPanelStyles/WhoToFollow.styled";
import { TrendingShowMore } from "../styles/RightPanelStyles/WhatsHappening.styled";
import { UserPhoto, UserPhotoContainer } from "../styles/NewTweet.styled";
import { FollowUserBtn } from "../styles/Button.styled";
import {
  getAllUsers,
  getMyUserData,
  getUserData,
  followProcess,
} from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TweetsContainer } from "../../components/styles/Home.styled";
import Spinner from "../../components/Spinner";

function WhoToFollow() {
  const dispatch = useDispatch();

  const [followingArray, setFollowingArray] = useState([]);
  const [followersArray, setFollowersArray] = useState([]);

  const { users, areUsersLoading } = useSelector((state) => state.user);
  const { fullUserData, isUserLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(
      getMyUserData(JSON.parse(localStorage.getItem("user")).username)
    ).then(function (data) {
      setFollowingArray([...data.payload[0].following]);
      setFollowersArray([...data.payload[0].followers]);
    });
  }, [dispatch]);

  const rightPanelUsersList = localStorage.getItem("user")
    ? users
        .filter(
          (user) => user._id !== JSON.parse(localStorage.getItem("user"))._id
        )
        .slice(0, 3)
    : users.slice(0, 3);

  const handleFollow = (username) => {
    if (localStorage.getItem("user")) {
      if (!followingArray.includes(username)) {
        setFollowingArray((prev) => [...prev, username]);
        console.log("user followed");
        console.log(followingArray);

        // const data = {
        //   myUserName --> my username who followed that user.
        //   otherUserName --> the username of the person I followed.
        //   didIfollowThisUser --> it's pretty much self explanatory :D
        // }
        const data = {
          myUserName: JSON.parse(localStorage.getItem("user")).username,
          otherUserName: username,
          didIfollowThisUser: false,
        };

        dispatch(followProcess(data));
      } else {
        setFollowingArray((prev) =>
          prev.filter((followedUser) => followedUser !== username)
        );
        console.log("user unfollowed");
        console.log(followingArray);
        const data = {
          myUserName: JSON.parse(localStorage.getItem("user")).username,
          otherUserName: username,
          didIfollowThisUser: true,
        };

        dispatch(followProcess(data));
      }
    }
    setHoverColor(false);
  };

  const [hoverColor, setHoverColor] = useState(false);

  const handleHover = (e) => {
    let originalText = e.target.innerText;
    if (e.target.innerText == "Following") {
      e.target.innerText = "Unfollow";
      setHoverColor(true);
    }
  };
  const handleMouseLeave = (e) => {
    let originalText = e.target.innerText;
    if (e.target.innerText == "Unfollow") {
      e.target.innerText = "Following";
    }
  };

  return (
    <WhoToFollowContainer>
      <WhoToFollowHeader>Who to follow</WhoToFollowHeader>

      {areUsersLoading ? (
        <TweetsContainer>
          <Spinner />
        </TweetsContainer>
      ) : (
        rightPanelUsersList.map((user) => {
          return (
            <FollowUserContainer key={user._id}>
              <Link to={`/${user.username}`}>
                <UserPhotoContainer>
                  <UserPhoto
                    src={
                      user.profilePhoto
                        ? user.profilePhoto
                        : "./images/blank-profile-picture-gf8e58e24f_640.png"
                    }
                  />
                </UserPhotoContainer>
              </Link>
              <Link to={`/${user.username}`}>
                <FollowUserInfo>
                  <FollowUserName>{user.name}</FollowUserName>
                  <FollowUserHandle>@{user.username}</FollowUserHandle>
                </FollowUserInfo>
              </Link>
              <FollowUserBtn
                align="center"
                onClick={() => handleFollow(user.username)}
                onMouseOver={(e) => handleHover(e)}
                onMouseLeave={(e) => handleMouseLeave(e)}
                hover={hoverColor}
              >
                {followingArray.includes(user.username)
                  ? "Following"
                  : "Follow"}
              </FollowUserBtn>
            </FollowUserContainer>
          );
        })
      )}

      {!areUsersLoading && <TrendingShowMore>Show more</TrendingShowMore>}
    </WhoToFollowContainer>
  );
}

export default WhoToFollow;
