import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { BsBell, BsArrowDownSquare } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ChatBoxBar,
  ChatBoxIconContainer,
  ChatBoxIconsContainer,
  ChatBoxStyle,
  ChatsContainer,
  Conversation,
  UserInfoMessageContainer,
} from "./styles/ChatBox.styled";
import { useState } from "react";
import { UserPhoto, UserPhotoContainer } from "./styles/NewTweet.styled";
import {
  TweetAuthor,
  TweetInfoContainer,
  UserHandle,
  UserName,
  UserVerifiedIconContainer,
} from "./styles/Tweet.styled";
import { MdVerified } from "react-icons/md";

function ChatBox() {
  const { user } = useSelector((state) => state.auth);

  const [boxVisible, setBoxVisible] = useState(false);

  return (
    <ChatBoxStyle visible={boxVisible}>
      <ChatBoxBar onClick={() => setBoxVisible((prev) => !prev)}>
        <h2>Messages</h2>
        <ChatBoxIconsContainer>
          <ChatBoxIconContainer>
            <IoMailOutline size="1.2rem" />
          </ChatBoxIconContainer>
          <ChatBoxIconContainer>
            {boxVisible ? (
              <FiArrowUp size="1.5rem" />
            ) : (
              <FiArrowDown size="1.5rem" />
            )}
          </ChatBoxIconContainer>
        </ChatBoxIconsContainer>
      </ChatBoxBar>
      <ChatsContainer visible={boxVisible}>
        <Conversation>
          <UserPhotoContainer>
            <UserPhoto
              src={"./images/blank-profile-picture-gf8e58e24f_640.png"}
            />
          </UserPhotoContainer>
          <UserInfoMessageContainer>
            <TweetInfoContainer>
              <UserName>
                <TweetAuthor>Mike Adams</TweetAuthor>
                <UserVerifiedIconContainer>
                  <MdVerified />
                </UserVerifiedIconContainer>
              </UserName>
              <UserHandle>@mike_adams</UserHandle>
            </TweetInfoContainer>
            <p>This is amazing I must say, well done man 👏</p>
          </UserInfoMessageContainer>
        </Conversation>
        <Conversation>
          <h2>User</h2>
          <p>Chat text</p>
          <p>Chat date</p>
        </Conversation>
        <Conversation>
          <h2>User</h2>
          <p>Chat text</p>
          <p>Chat date</p>
        </Conversation>
      </ChatsContainer>
    </ChatBoxStyle>
  );
}

export default ChatBox;
