import React from "react";
import { MenuItem, MenuItemText, TweetBtn } from "./styles/LeftMenu.styled";
import {
  LeftPanelContainer,
  LeftPanelStyle,
  LeftPanelUserContainer,
  LeftPanelUserHandle,
  LeftPanelUserInfo,
  LeftPanelUserName,
  Logo,
  LogoContainer,
  LogoMenuContainer,
} from "./styles/LeftPanel.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faHashtag,
  faBell,
  faMessage,
  faBookmark,
  faListCheck,
  faUser,
  faEllipsis,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserPhoto, UserPhotoContainer } from "./styles/NewTweet.styled";
import { BiHomeCircle } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { FiHash } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { CgList, CgMoreO } from "react-icons/cg";

function LeftPanel() {
  return (
    <LeftPanelStyle>
      <LeftPanelContainer>
        <LogoMenuContainer>
          <LogoContainer>
            <Logo src="./images/twitter logo.svg" />
          </LogoContainer>
          <Link to="/home">
            <MenuItem>
              {/* <FontAwesomeIcon icon={faHouseUser} size="lg"></FontAwesomeIcon> */}
              <BiHomeCircle size="1.75rem" color="#0f1419" />
              <MenuItemText>Home</MenuItemText>
            </MenuItem>
          </Link>
          <MenuItem>
            {/* <FontAwesomeIcon icon={faHashtag} size="lg"></FontAwesomeIcon> */}
            <FiHash size="1.75rem" color="#0f1419" />

            <MenuItemText>Explore</MenuItemText>
          </MenuItem>
          <MenuItem>
            {/* <FontAwesomeIcon icon={faBell} size="lg"></FontAwesomeIcon> */}
            <BsBell size="1.75rem" color="#0f1419" />
            <MenuItemText>Notifications</MenuItemText>
          </MenuItem>
          <MenuItem>
            {/* <FontAwesomeIcon icon={faMessage} size="lg"></FontAwesomeIcon> */}
            <HiOutlineMail size="1.75rem" color="#0f1419" />
            <MenuItemText>Messages</MenuItemText>
          </MenuItem>
          <MenuItem hide>
            {/* <FontAwesomeIcon icon={faBookmark} size="lg"></FontAwesomeIcon> */}
            <BiBookmark size="1.75rem" color="#0f1419" />

            <MenuItemText>Bookmarks</MenuItemText>
          </MenuItem>
          <MenuItem hide>
            {/* <FontAwesomeIcon icon={faListCheck} size="lg"></FontAwesomeIcon> */}
            <CgList size="1.75rem" color="#0f1419" />

            <MenuItemText>Lists</MenuItemText>
          </MenuItem>
          <Link to="/user">
            <MenuItem>
              {/* <FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon> */}
              <HiOutlineUser size="1.75rem" color="#0f1419" />

              <MenuItemText>Profile</MenuItemText>
            </MenuItem>
          </Link>
          <MenuItem>
            {/* <FontAwesomeIcon icon={faEllipsis} size="lg"></FontAwesomeIcon> */}
            <CgMoreO size="1.75rem" color="#0f1419" />

            <MenuItemText>More</MenuItemText>
          </MenuItem>
          <TweetBtn tweetbtn>
            <FontAwesomeIcon icon={faFeather} size="lg"></FontAwesomeIcon>
            <MenuItemText>Tweet</MenuItemText>
          </TweetBtn>
        </LogoMenuContainer>
        <LeftPanelUserContainer>
          <UserPhotoContainer size="small">
            <UserPhoto src="./images/user photo.jpg" />
          </UserPhotoContainer>
          <LeftPanelUserInfo>
            <LeftPanelUserName>Antoine Vallas</LeftPanelUserName>
            <LeftPanelUserHandle>@aavvallas</LeftPanelUserHandle>
          </LeftPanelUserInfo>
          <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
        </LeftPanelUserContainer>
      </LeftPanelContainer>
    </LeftPanelStyle>
  );
}

export default LeftPanel;
