import React, { useEffect } from "react";
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
import { getAllUsers } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TweetsContainer } from "../../components/styles/Home.styled";
import Spinner from "../../components/Spinner";

function WhoToFollow() {
  const dispatch = useDispatch();
  const { users, areUsersLoading } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const rightPanelUsersList = localStorage.getItem("user")
    ? users
        .filter(
          (user) => user._id !== JSON.parse(localStorage.getItem("user"))._id
        )
        .slice(0, 3)
    : users.slice(0, 3);

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
            <Link to={`/${user.username}`} key={user._id}>
              <FollowUserContainer>
                <UserPhotoContainer>
                  <UserPhoto
                    src={
                      user.profilePhoto
                        ? user.profilePhoto
                        : "./images/blank-profile-picture-gf8e58e24f_640.png"
                    }
                  />
                </UserPhotoContainer>
                <FollowUserInfo>
                  <FollowUserName>{user.name}</FollowUserName>
                  <FollowUserHandle>{user.username}</FollowUserHandle>
                </FollowUserInfo>
                <FollowUserBtn align="center">Follow</FollowUserBtn>
              </FollowUserContainer>
            </Link>
          );
        })
      )}

      {!areUsersLoading && <TrendingShowMore>Show more</TrendingShowMore>}
    </WhoToFollowContainer>
  );
}

export default WhoToFollow;
