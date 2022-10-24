import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
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
import { getUserData } from "../features/user/userSlice";
import { useRef } from "react";
import ThemesModal from "./Modals/ThemesModal";
import useOnClickOutside from "../custom hooks/useOnClickOutside";
import { useCallback } from "react";

function LeftPanel() {
  const [userPopUpState, setUserPopUpState] = useState(false);
  const [themesModal, setThemesModal] = useState(false);

  const popupRef = useRef(); // Themes modal ref.
  const leftPanelRef = useRef(); // Left Panel ref.

  // This custom hook closes the modal or popup if the user clicked outside of them.
  useOnClickOutside(popupRef, () => setThemesModal(false)); // This hook is related to themes modal.
  useOnClickOutside(leftPanelRef, () => setUserPopUpState(false)); // This hook is related to left panel popUp.

  const userPopUp = () => {
    setUserPopUpState((prev) => !prev);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading } = useSelector((state) => state.auth);
  const { fullUserData, isUserLoading } = useSelector((state) => state.user);

  const onLogout = () => {
    dispatch(logout());
    dispatch(resetUser());
    dispatch(reset());
    navigate("/");
  };

  const domElement = document.getElementById("modals");
  // const domElement2 = document.getElementById("modals2");

  const [activeTab, setActiveTab] = useState("Home");

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const handleMoreTab = (tab) => {
    setActiveTab(tab);
    setThemesModal((prev) => !prev);
  };

  return (
    <LeftPanelStyle>
      <LeftPanelContainer>
        <LeftPanelAllContainer>
          <LogoContainer>
            <FaTwitter size="1.75rem" />
          </LogoContainer>

          <LogoMenuContainer>
            {user && (
              <Link to="/home">
                <MenuItem onClick={() => handleActiveTab("Home")}>
                  <BiHomeCircle size="1.75rem" />
                  <MenuItemText active={activeTab === "Home" ? true : false}>
                    Home
                  </MenuItemText>
                </MenuItem>
              </Link>
            )}
            <MenuItem onClick={() => handleActiveTab("Explore")}>
              <FiHash size="1.75rem" />
              <MenuItemText active={activeTab === "Explore" ? true : false}>
                Explore
              </MenuItemText>
            </MenuItem>

            {user && (
              <>
                <MenuItem onClick={() => handleActiveTab("Notifications")}>
                  <BsBell size="1.75rem" />
                  <MenuItemText
                    active={activeTab === "Notifications" ? true : false}
                  >
                    Notifications
                  </MenuItemText>
                </MenuItem>
                <MenuItem onClick={() => handleActiveTab("Messages")}>
                  <HiOutlineMail size="1.75rem" />
                  <MenuItemText
                    active={activeTab === "Messages" ? true : false}
                  >
                    Messages
                  </MenuItemText>
                </MenuItem>
                <MenuItem hide onClick={() => handleActiveTab("Bookmarks")}>
                  <BiBookmark size="1.75rem" />

                  <MenuItemText
                    active={activeTab === "Bookmarks" ? true : false}
                  >
                    Bookmarks
                  </MenuItemText>
                </MenuItem>
                <MenuItem hide onClick={() => handleActiveTab("Lists")}>
                  <CgList size="1.75rem" />

                  <MenuItemText active={activeTab === "Lists" ? true : false}>
                    Lists
                  </MenuItemText>
                </MenuItem>
              </>
            )}

            {user && (
              <>
                <Link
                  to={"/" + JSON.parse(localStorage.getItem("user")).username}
                >
                  <MenuItem onClick={() => handleActiveTab("Profile")}>
                    <HiOutlineUser size="1.75rem" />
                    <MenuItemText
                      active={activeTab === "Profile" ? true : false}
                    >
                      Profile
                    </MenuItemText>
                  </MenuItem>
                </Link>
                {themesModal &&
                  ReactDOM.createPortal(
                    <ThemesModal
                      popupRef={popupRef}
                      setThemesModal={setThemesModal}
                    />,
                    domElement
                  )}
                <MenuItem onClick={() => handleMoreTab("More")}>
                  <CgMoreO size="1.75rem" />
                  <MenuItemText active={activeTab === "More" ? true : false}>
                    More
                  </MenuItemText>
                </MenuItem>
              </>
            )}
          </LogoMenuContainer>
          {user && (
            <TweetBtn tweetbtn>
              <FontAwesomeIcon icon={faFeather} size="lg"></FontAwesomeIcon>
              <MenuItemText>Tweet</MenuItemText>
            </TweetBtn>
          )}
        </LeftPanelAllContainer>
        {user && (
          <LeftPanelUserContainer
            onClick={() => setUserPopUpState((prev) => !prev)}
            ref={leftPanelRef}
          >
            <UserPhotoContainer size="small">
              <UserPhoto
                src={
                  localStorage.getItem("user") &&
                  JSON.parse(localStorage.getItem("user")).profilePhoto !== null
                    ? JSON.parse(localStorage.getItem("user")).profilePhoto
                    : "http://localhost:3000/images/blank-profile-picture-gf8e58e24f_640.png"
                }
              />
            </UserPhotoContainer>
            <LeftPanelUserInfo>
              <LeftPanelUserName>
                {JSON.parse(localStorage.getItem("user")).name}
              </LeftPanelUserName>
              <LeftPanelUserHandle>
                @{JSON.parse(localStorage.getItem("user")).username}
              </LeftPanelUserHandle>
            </LeftPanelUserInfo>
            <LeftPanelUserIconContainer>
              <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
            </LeftPanelUserIconContainer>
            {userPopUpState && (
              <LeftPanelUserPopUp>
                <UserPopUpInfo>
                  <UserPhotoContainer size="small">
                    <UserPhoto
                      src={
                        localStorage.getItem("user") &&
                        JSON.parse(localStorage.getItem("user"))
                          .profilePhoto !== null
                          ? JSON.parse(localStorage.getItem("user"))
                              .profilePhoto
                          : "http://localhost:3000/images/blank-profile-picture-gf8e58e24f_640.png"
                      }
                    />
                  </UserPhotoContainer>
                  <UserPopUpNameUsername>
                    <LeftPanelUserName>
                      {JSON.parse(localStorage.getItem("user")).name}
                    </LeftPanelUserName>
                    <LeftPanelUserHandle>
                      @{JSON.parse(localStorage.getItem("user")).username}
                    </LeftPanelUserHandle>
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
                    <UserPopUpHandle>
                      @{JSON.parse(localStorage.getItem("user")).username}
                    </UserPopUpHandle>
                  </UserPopUpBottomText>
                </UserPopUpBottom>
              </LeftPanelUserPopUp>
            )}
          </LeftPanelUserContainer>
        )}
      </LeftPanelContainer>
    </LeftPanelStyle>
  );
}

export default LeftPanel;
