import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { BsBell, BsArrowDownSquare } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FiArrowDown } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ChatBoxBar,
  ChatBoxIconContainer,
  ChatBoxStyle,
} from "./styles/ChatBox.styled";

function ChatBox() {
  const { user } = useSelector((state) => state.auth);

  return (
    <ChatBoxStyle>
      <ChatBoxBar>
        <h2>Messages</h2>
        <ChatBoxIconContainer>
          <IoMailOutline size="1.5rem" />
          <FiArrowDown size="1.5rem" />
        </ChatBoxIconContainer>
      </ChatBoxBar>
    </ChatBoxStyle>
  );
}

export default ChatBox;
