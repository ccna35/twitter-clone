import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { MainTweetBtn } from "./styles/Button.styled";
import { Link } from "react-router-dom";
import { AiOutlineFileGif, AiOutlineCalendar } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { FaRegSmile } from "react-icons/fa";
import { CgPin } from "react-icons/cg";
import { BiPoll } from "react-icons/bi";
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
import { HiOutlinePhotograph } from "react-icons/hi";
import { createReply } from "../features/replies/replySlice";
import { useDispatch } from "react-redux";
import {
  NewReplyBottomContainer,
  NewReplyContainer,
  NewReplyStyle,
  ReplyingTo,
} from "./styles/NewReply.styled";

function NewReply({ username, tweetID }) {
  const [formData, setFormData] = useState({
    text: "",
    image: null,
    token: null,
    tweetID,
  });

  // Show replying to & reply options
  const [replyOptions, setReplyOptions] = useState(false);
  // text color of the character count of the tweet text.
  const [textColor, setTextColor] = useState("blue");
  // This determines if the tweet body is less or equal to 280 characters.
  const [disableButton, setDisableButton] = useState(true);

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
      // if (imgData.keys().length !== 0) {
      //   const data = await fetch(
      //     "https://api.cloudinary.com/v1_1/dmua4axn3/image/upload",
      //     {
      //       method: "POST",
      //       body: imgData,
      //     }
      //   );

      //   const res = await data.json();

      //   console.log(res.url);
      //   console.log(imageURL);

      //   formData.image = imageURL;

      //   dispatch(createReply(formData));
      // } else {
      //   dispatch(createReply(formData));
      // }

      dispatch(createReply(formData));

      setFormData({ text: "", image: null });
      setImageUpload({});
      setImageURL(null);
    }
  };
  return (
    <NewReplyStyle>
      <NewReplyContainer>
        <UserPhotoContainer>
          {localStorage.getItem("user") && (
            <Link to={"/" + JSON.parse(localStorage.getItem("user")).username}>
              <UserPhoto
                src={
                  JSON.parse(localStorage.getItem("user")).profilePhoto ||
                  "http://localhost:3000/images/blank-profile-picture-gf8e58e24f_640.png"
                }
              />
            </Link>
          )}
        </UserPhotoContainer>
        <div style={{ width: "100%" }}>
          {replyOptions && (
            <ReplyingTo>
              Replying to <Link to={"/" + username}>@{username}</Link>
            </ReplyingTo>
          )}
          <TweetForm onSubmit={onSubmit}>
            <TweetInput
              placeholder="Tweet your reply"
              onChange={(e) => onChange(e)}
              value={formData.text}
              onFocus={() => setReplyOptions(true)}
              newReply
            />
            <NewReplyBottomContainer>
              {replyOptions && (
                <TweetOptionsContainer newReply>
                  <TweetIconsContainer>
                    <TweetIconContainer>
                      <HiOutlinePhotograph size="1.25rem" />
                    </TweetIconContainer>
                    <TweetIconContainer>
                      <AiOutlineFileGif size="1.25rem" />
                    </TweetIconContainer>

                    <TweetIconContainer>
                      <FaRegSmile size="1.25rem" />
                    </TweetIconContainer>

                    <TweetIconContainer>
                      <CgPin />
                    </TweetIconContainer>
                  </TweetIconsContainer>
                </TweetOptionsContainer>
              )}

              <RightContainer>
                {formData.text.length !== 0 && (
                  <CharCount color={textColor}>
                    {formData.text.length}
                  </CharCount>
                )}

                <MainTweetBtn disabled={disableButton}>Reply</MainTweetBtn>
              </RightContainer>
            </NewReplyBottomContainer>
          </TweetForm>
        </div>
      </NewReplyContainer>
    </NewReplyStyle>
  );
}

export default NewReply;
