import React from "react";
import { MenuItem, MenuItemText, TweetBtn } from "./styles/LeftMenu.styled";
import {
  LeftPanelContainer,
  LeftPanelStyle,
  LeftPanelUserContainer,
  LeftPanelUserHandle,
  LeftPanelUserIconContainer,
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
              <BiHomeCircle size="1.75rem" />
              <MenuItemText>Home</MenuItemText>
            </MenuItem>
          </Link>
          <MenuItem>
            <FiHash size="1.75rem" />

            <MenuItemText>Explore</MenuItemText>
          </MenuItem>
          <MenuItem>
            <BsBell size="1.75rem" />
            <MenuItemText>Notifications</MenuItemText>
          </MenuItem>
          <MenuItem>
            <HiOutlineMail size="1.75rem" />
            <MenuItemText>Messages</MenuItemText>
          </MenuItem>
          <MenuItem hide>
            <BiBookmark size="1.75rem" />

            <MenuItemText>Bookmarks</MenuItemText>
          </MenuItem>
          <MenuItem hide>
            <CgList size="1.75rem" />

            <MenuItemText>Lists</MenuItemText>
          </MenuItem>
          <Link to="/user">
            <MenuItem>
              <HiOutlineUser size="1.75rem" />

              <MenuItemText>Profile</MenuItemText>
            </MenuItem>
          </Link>
          <MenuItem>
            <CgMoreO size="1.75rem" />

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
            <LeftPanelUserName>Shawky Khalil</LeftPanelUserName>
            <LeftPanelUserHandle>@shawky_khalil</LeftPanelUserHandle>
          </LeftPanelUserInfo>
          <LeftPanelUserIconContainer>
            <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
          </LeftPanelUserIconContainer>
        </LeftPanelUserContainer>
      </LeftPanelContainer>
    </LeftPanelStyle>
  );
}

export default LeftPanel;
