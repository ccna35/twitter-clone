import React from "react";
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
} from "./styles/User.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { EditProfileBtn } from "./styles/Button.styled";

function User() {
  return (
    <UserStyle>
      <UserNavBar>
        <UserNavbarIconContainer>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </UserNavbarIconContainer>
        <UserNavbarInfo>
          <UserNavbarFullName>Shawky Khalil</UserNavbarFullName>
          <UserNavbarTweetCount>877 Tweets</UserNavbarTweetCount>
        </UserNavbarInfo>
      </UserNavBar>

      <UserPhotoCoverContainer>
        <UserCoverContainer>
          <UserCover src="./images/cover.jfif" />
        </UserCoverContainer>

        <UserPhotoContainer>
          <UserPhoto src="./images/user photo.jpg" />
        </UserPhotoContainer>
      </UserPhotoCoverContainer>

      <UserProfileInfoContainer>
        <EditProfileBtn>Edit Profile</EditProfileBtn>
        <UserNavbarInfo>
          <UserNavbarFullName>Shawky Khalil</UserNavbarFullName>
          <UserNavbarTweetCount>@shawky_khalil</UserNavbarTweetCount>
        </UserNavbarInfo>
        <UserProfileDescription>
          Web Developer and Digital Marketer
        </UserProfileDescription>
      </UserProfileInfoContainer>
    </UserStyle>
  );
}

export default User;
