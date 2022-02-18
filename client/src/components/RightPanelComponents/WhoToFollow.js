import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  FollowUserContainer,
  FollowUserHandle,
  FollowUserInfo,
  FollowUserName,
  WhoToFollowContainer,
  WhoToFollowHeader,
} from "../styles/RightPanelStyles/WhoToFollow.styled";
import { UserPhoto, UserPhotoContainer } from "../styles/NewTweet.styled";
import { FollowUserBtn } from "../styles/Button.styled";

function WhoToFollow() {
  return (
    <WhoToFollowContainer>
      <WhoToFollowHeader>Who to follow</WhoToFollowHeader>

      <FollowUserContainer>
        <UserPhotoContainer>
          <UserPhoto src="./images/probane.jpg" />
        </UserPhotoContainer>
        <FollowUserInfo>
          <FollowUserName>Propane</FollowUserName>
          <FollowUserHandle>@Propane_Digital</FollowUserHandle>
        </FollowUserInfo>
        <FollowUserBtn>Follow</FollowUserBtn>
      </FollowUserContainer>

      <FollowUserContainer>
        <UserPhotoContainer>
          <UserPhoto src="./images/SprintbaseB.jpg" />
        </UserPhotoContainer>
        <FollowUserInfo>
          <FollowUserName>SprintbaseBot</FollowUserName>
          <FollowUserHandle>@SprintbaseB</FollowUserHandle>
        </FollowUserInfo>
        <FollowUserBtn>Follow</FollowUserBtn>
      </FollowUserContainer>

      <FollowUserContainer>
        <UserPhotoContainer>
          <UserPhoto src="./images/aavvallas.jpg" />
        </UserPhotoContainer>
        <FollowUserInfo>
          <FollowUserName>Antoine Vallas</FollowUserName>
          <FollowUserHandle>@aavvallas</FollowUserHandle>
        </FollowUserInfo>
        <FollowUserBtn>Follow</FollowUserBtn>
      </FollowUserContainer>
    </WhoToFollowContainer>
  );
}

export default WhoToFollow;
