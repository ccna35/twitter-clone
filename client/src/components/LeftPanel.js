import React, { useState } from "react";
import { MenuItem, MenuItemText, TweetBtn } from "./styles/LeftMenu.styled";
import {
  LeftPanelAllContainer,
  LeftPanelContainer,
  LeftPanelStyle,
  LeftPanelUserContainer,
  LeftPanelUserHandle,
  LeftPanelUserIconContainer,
  LeftPanelUserInfo,
  LeftPanelUserName,
  LeftPanelUserPopUp,
  LogoContainer,
  LogoMenuContainer,
  UserPopUpBottom,
  UserPopUpBottomText,
  UserPopUpHandle,
  UserPopUpIconContainer,
  UserPopUpInfo,
  UserPopUpNameUsername,
} from "./styles/LeftPanel.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faFeather } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserPhoto, UserPhotoContainer } from "./styles/NewTweet.styled";
import { BiHomeCircle, BiBookmark } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { FiHash } from "react-icons/fi";
import { CgList, CgMoreO } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset, resetUser } from "../features/auth/authSlice";

function LeftPanel() {
  const [userPopUpState, setUserPopUpState] = useState(false);

  const userPopUp = () => {
    setUserPopUpState((prev) => !prev);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(resetUser());
    dispatch(reset());
    navigate("/");
  };

  return (
    <LeftPanelStyle>
      <LeftPanelContainer>
        <LeftPanelAllContainer>
          <LogoContainer>
            <FaTwitter size="1.75rem" />
          </LogoContainer>

          <LogoMenuContainer>
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
              {/* <Link to={"/user" + JSON.parse(localStorage.getItem("user")).username}> */}
              <MenuItem>
                <HiOutlineUser size="1.75rem" />
                <MenuItemText>Profile</MenuItemText>
              </MenuItem>
            </Link>
            <MenuItem>
              <CgMoreO size="1.75rem" />

              <MenuItemText>More</MenuItemText>
            </MenuItem>
          </LogoMenuContainer>

          <TweetBtn tweetbtn>
            <FontAwesomeIcon icon={faFeather} size="lg"></FontAwesomeIcon>
            <MenuItemText>Tweet</MenuItemText>
          </TweetBtn>
        </LeftPanelAllContainer>
        <LeftPanelUserContainer onClick={userPopUp}>
          <UserPhotoContainer size="small">
            <UserPhoto src="./images/user-photo.jpg" />
          </UserPhotoContainer>
          <LeftPanelUserInfo>
            <LeftPanelUserName>Shawky Khalil</LeftPanelUserName>
            <LeftPanelUserHandle>@shawky_khalil</LeftPanelUserHandle>
          </LeftPanelUserInfo>
          <LeftPanelUserIconContainer>
            <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
          </LeftPanelUserIconContainer>
          {userPopUpState && (
            <LeftPanelUserPopUp>
              <UserPopUpInfo>
                <UserPhotoContainer size="small">
                  <UserPhoto src="./images/user-photo.jpg" />
                </UserPhotoContainer>
                <UserPopUpNameUsername>
                  <LeftPanelUserName>Shawky Khalil</LeftPanelUserName>
                  <LeftPanelUserHandle>@shawky_khalil</LeftPanelUserHandle>
                </UserPopUpNameUsername>
                <UserPopUpIconContainer>
                  <AiOutlineCheck />
                </UserPopUpIconContainer>
              </UserPopUpInfo>
              <UserPopUpBottom>
                <UserPopUpBottomText>
                  Add an existing account
                </UserPopUpBottomText>
                <UserPopUpBottomText onClick={onLogout}>
                  {isLoading ? "Logging out..." : "Log out"}
                  <UserPopUpHandle>@shawky_khalil</UserPopUpHandle>
                </UserPopUpBottomText>
              </UserPopUpBottom>
            </LeftPanelUserPopUp>
          )}
        </LeftPanelUserContainer>
      </LeftPanelContainer>
    </LeftPanelStyle>
  );
}

export default LeftPanel;
