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
  UserProfileAboutContainer,
  AboutSingleContainer,
  AboutSingleText,
  FollowingFollowersContainer,
  FollowContainer,
  FollowCount,
  FollowText,
} from "./styles/User.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMapMarkerAlt,
  faCalendarAlt,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
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

        <UserProfileAboutContainer>
          <AboutSingleContainer>
            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
            <AboutSingleText>Egypt</AboutSingleText>
          </AboutSingleContainer>
          <AboutSingleContainer>
            <FontAwesomeIcon icon={faBirthdayCake}></FontAwesomeIcon>
            <AboutSingleText>Born July 7, 1997</AboutSingleText>
          </AboutSingleContainer>
          <AboutSingleContainer>
            <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            <AboutSingleText>Joined December 2012</AboutSingleText>
          </AboutSingleContainer>
        </UserProfileAboutContainer>

        <FollowingFollowersContainer>
          <FollowContainer>
            <FollowCount>459</FollowCount>
            <FollowText>Following</FollowText>
          </FollowContainer>
          <FollowContainer>
            <FollowCount>93</FollowCount>
            <FollowText>Followers</FollowText>
          </FollowContainer>
        </FollowingFollowersContainer>
      </UserProfileInfoContainer>
    </UserStyle>
  );
}

export default User;
