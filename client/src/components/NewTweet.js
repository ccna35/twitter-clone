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
} from "./styles/NewTweet.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { MainTweetBtn } from "./styles/Button.styled";
import { Link } from "react-router-dom";
import { AiOutlineFileGif, AiOutlineCalendar } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { CgPin } from "react-icons/cg";
import { BiPoll } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { createTweet } from "../features/tweets/tweetSlice";
import io from "socket.io-client";
import { getUserData, reset } from "../features/user/userSlice";
import Axios from "axios";

// const socket = io.connect("http://localhost:8080/");

function NewTweet() {
  const [formData, setFormData] = useState({
    text: "",
    image: null,
    token: null,
  });

  const [whoCanReply, setWhoCanReply] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, text: e.target.value }));
  };

  const dispatch = useDispatch();

  const [imageUpload, setImageUpload] = useState({});

  const imgData = new FormData();

  const handleUploadButton = async (file) => {
    imgData.append("file", file);
    imgData.append("upload_preset", "lqpivui7kjk78");
    imgData.append("cloud_name", "dmua4axn3");

    // const imgData = {};
    // imgData["file"] = file;
    // imgData["upload_preset"] = "lqpivui7";
    // imgData["cloud_name"] = "dmua4axn3";

    for (const pair of imgData.entries()) {
      console.log(pair[0] + " " + pair[1]);
    }

    // const data = await fetch(
    //   "https://api.cloudinary.com/v1_1/dmua4axn3/image/upload",
    //   {
    //     method: "POST",
    //     body: imgData,
    //   }
    // );

    // const res = await data.json();

    // console.log(res.url);

    // console.log(data);
    // console.log(Object.keys(imgData));
    // setImageUpload((prev) => ({ ...prev, ...imgData }));
    // console.log(imageUpload.entries());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData) {
      formData.token = `Bearer ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
      console.log(formData);
      // console.log(imgData.keys().length !== 0);
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

        // setFormData((prev) => ({
        //   ...prev,
        //   image: res.url,
        // }));

        formData.image = res.url;

        // setFormData((prev) => ({
        //   ...prev,
        //   image: res.data.url,
        // }));
        dispatch(createTweet(formData));
      } else {
        dispatch(createTweet(formData));
      }

      setFormData({ text: "", image: null });
      setImageUpload({});
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
              fullUserData.length > 0 && fullUserData[0].profilePhoto
                ? fullUserData[0].profilePhoto
                : "./images/blank-profile-picture-gf8e58e24f_640.png"
            }
          />
        </UserPhotoContainer>
      </Link>

      <TweetForm onSubmit={onSubmit}>
        <TweetInput
          type="text"
          placeholder="What’s happening"
          onChange={(e) => onChange(e)}
          value={formData.text}
          onFocus={() => setWhoCanReply(true)}
        />
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

          <MainTweetBtn
            disabled={
              formData.text.length === 0 && imageUpload.file === undefined
            }
          >
            Tweet
          </MainTweetBtn>
        </TweetOptionsContainer>
      </TweetForm>
    </NewTweetStyle>
  );
}

export default NewTweet;
