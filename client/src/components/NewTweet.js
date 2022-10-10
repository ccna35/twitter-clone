import React, { useState, useEffect } from "react";
import {
  NewTweetStyle,
  TweetForm,
  TweetIconContainer,
  TweetIconsContainer,
  TweetInput,
  TweetOptionsContainer,
  UserPhoto,
  UserPhotoContainer,
  WhoCanReplyContainer,
  WhoCanReplyText,
  UploadButton,
  TweetTextInput,
  RightContainer,
  CharCount,
  UploadedImageContainer,
  UploadedImage,
} from "./styles/NewTweet.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { MainTweetBtn } from "./styles/Button.styled";
import { Link } from "react-router-dom";
import { AiOutlineFileGif, AiOutlineCalendar } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { FaRegSmile } from "react-icons/fa";
import { CgPin } from "react-icons/cg";
import { BiPoll } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { createTweet } from "../features/tweets/tweetSlice";
import io from "socket.io-client";
import { getUserData, reset } from "../features/user/userSlice";

// const socket = io.connect("http://localhost:8080/");

function NewTweet() {
  const [formData, setFormData] = useState({
    text: "",
    image: null,
    token: null,
  });

  const [whoCanReply, setWhoCanReply] = useState(false);
  // text color of the character count of the tweet text.
  const [textColor, setTextColor] = useState("blue");
  // This determines if the tweet body is less or equal to 280 characters.
  const [disableButton, setDisableButton] = useState(true);

  const { user } = useSelector((state) => state.auth);

  const [rows, setRows] = useState(1);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, text: e.target.value }));
    if (e.target.value.length > 280) {
      setTextColor("red");
      setDisableButton(true);
    } else {
      setTextColor("blue");
      setDisableButton(false);
    }
  };

  const dispatch = useDispatch();

  const [imageUpload, setImageUpload] = useState({});
  const [imageURL, setImageURL] = useState(null);

  const imgData = new FormData();

  const handleUploadButton = async (file) => {
    imgData.append("file", file);
    imgData.append("upload_preset", "lqpivui7kjk78");
    imgData.append("cloud_name", "dmua4axn3");
    console.log(file);
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dmua4axn3/image/upload",
      {
        method: "POST",
        body: imgData,
      }
    );

    const res = await data.json();

    console.log(res.url);
    setImageURL(res.url);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData) {
      formData.token = `Bearer ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
      console.log(formData);
      if (imgData.keys().length !== 0) {
        const data = await fetch(
          "https://api.cloudinary.com/v1_1/dmua4axn3/image/upload",
          {
            method: "POST",
            body: imgData,
          }
        );

        const res = await data.json();

        console.log(res.url);
        console.log(imageURL);

        formData.image = imageURL;

        dispatch(createTweet(formData));
      } else {
        dispatch(createTweet(formData));
      }

      setFormData({ text: "", image: null });
      setImageUpload({});
      setImageURL(null);
    }
  };

  const { fullUserData, isUserLoading } = useSelector((state) => state.user);
  useEffect(() => {
    const userData = {
      username: JSON.parse(localStorage.getItem("user")).username,
    };
    dispatch(getUserData(userData.username));
    dispatch(reset());
  }, [user, dispatch]);

  return (
    <NewTweetStyle>
      <Link to={"/" + JSON.parse(localStorage.getItem("user")).username}>
        <UserPhotoContainer>
          <UserPhoto
            src={
              localStorage.getItem("user") &&
              JSON.parse(localStorage.getItem("user")).profilePhoto !== null
                ? JSON.parse(localStorage.getItem("user")).profilePhoto
                : "./images/blank-profile-picture-gf8e58e24f_640.png"
            }
          />
        </UserPhotoContainer>
      </Link>

      <TweetForm onSubmit={onSubmit}>
        <TweetInput
          placeholder="What’s happening"
          onChange={(e) => onChange(e)}
          value={formData.text}
          onFocus={() => setWhoCanReply(true)}
        />
        {imageURL && (
          <UploadedImageContainer>
            <RiCloseFill size="1.75rem" onClick={() => setImageURL(null)} />
            <UploadedImage src={imageURL} />
          </UploadedImageContainer>
        )}
        {whoCanReply && (
          <WhoCanReplyContainer>
            <FontAwesomeIcon icon={faEarth}></FontAwesomeIcon>
            <WhoCanReplyText>Everyone can reply</WhoCanReplyText>
          </WhoCanReplyContainer>
        )}

        <TweetOptionsContainer>
          <TweetIconsContainer>
            <TweetIconContainer
              onChange={(e) => {
                handleUploadButton(e.target.files[0]);
              }}
            >
              <HiOutlinePhotograph size="1.25rem" />
              <UploadButton type="file" />
            </TweetIconContainer>
            <TweetIconContainer>
              <AiOutlineFileGif size="1.25rem" />
            </TweetIconContainer>
            <TweetIconContainer>
              <BiPoll />
            </TweetIconContainer>
            <TweetIconContainer>
              <FaRegSmile size="1.25rem" />
            </TweetIconContainer>
            <TweetIconContainer>
              <AiOutlineCalendar size="1.25rem" />
            </TweetIconContainer>
            <TweetIconContainer>
              <CgPin />
            </TweetIconContainer>
          </TweetIconsContainer>
          <RightContainer>
            {formData.text.length !== 0 && (
              <CharCount color={textColor}>{formData.text.length}</CharCount>
            )}

            <MainTweetBtn disabled={disableButton}>Tweet</MainTweetBtn>
          </RightContainer>
        </TweetOptionsContainer>
      </TweetForm>
    </NewTweetStyle>
  );
}

export default NewTweet;
