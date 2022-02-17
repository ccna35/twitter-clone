import React from "react";
import { MenuItem, MenuItemText, TweetBtn } from "./styles/LeftMenu.styled";
import {
  LeftPanelContainer,
  LeftPanelStyle,
  Logo,
  LogoContainer,
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

function LeftPanel() {
  return (
    <LeftPanelStyle>
      <LeftPanelContainer>
        <LogoContainer>
          <Logo src="./images/twitter logo.svg" />
        </LogoContainer>
        <Link to="/home">
          <MenuItem>
            <FontAwesomeIcon icon={faHouseUser} size="lg"></FontAwesomeIcon>
            <MenuItemText>Home</MenuItemText>
          </MenuItem>
        </Link>
        <MenuItem>
          <FontAwesomeIcon icon={faHashtag} size="lg"></FontAwesomeIcon>
          <MenuItemText>Explore</MenuItemText>
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faBell} size="lg"></FontAwesomeIcon>
          <MenuItemText>Notifications</MenuItemText>
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faMessage} size="lg"></FontAwesomeIcon>
          <MenuItemText>Messages</MenuItemText>
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faBookmark} size="lg"></FontAwesomeIcon>
          <MenuItemText>Bookmarks</MenuItemText>
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faListCheck} size="lg"></FontAwesomeIcon>
          <MenuItemText>Lists</MenuItemText>
        </MenuItem>
        <Link to="/user">
          <MenuItem>
            <FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon>
            <MenuItemText>Profile</MenuItemText>
          </MenuItem>
        </Link>
        <MenuItem>
          <FontAwesomeIcon icon={faEllipsis} size="lg"></FontAwesomeIcon>
          <MenuItemText>More</MenuItemText>
        </MenuItem>
        <TweetBtn tweetbtn>
          <FontAwesomeIcon icon={faFeather} size="lg"></FontAwesomeIcon>
          <MenuItemText>Tweet</MenuItemText>
        </TweetBtn>
      </LeftPanelContainer>
    </LeftPanelStyle>
  );
}

export default LeftPanel;
