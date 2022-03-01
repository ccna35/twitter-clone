import React from "react";
import {
  MobileBarContainer,
  MobileBarStyle,
  MobileTweetBtn,
} from "./styles/MobileBar.styled";
import { BiHomeCircle } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";

function MobileBar() {
  return (
    <MobileBarStyle>
      <MobileTweetBtn>
        <FontAwesomeIcon icon={faFeather} size="lg"></FontAwesomeIcon>
      </MobileTweetBtn>
      <MobileBarContainer>
        <BiHomeCircle size="1.75rem" />
        <RiSearchLine size="1.75rem" />
        <BsBell size="1.75rem" />
        <HiOutlineMail size="1.75rem" />
      </MobileBarContainer>
    </MobileBarStyle>
  );
}

export default MobileBar;
