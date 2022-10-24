import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, updateUserData } from "../../features/user/userSlice";
import { FollowUserBtn } from "../styles/Button.styled";
import {
  CloseIconContainer,
  EditProfileBackground,
  EditProfileContainer,
  Heading,
  ModalBar,
  ModalForm,
  ModalInput,
  PhotoIconContainer,
  UserCover,
  UserCoverContainer,
  UserPhoto,
  UserPhotoContainer,
  UserPhotoCoverContainer,
} from "../styles/Modals/EditProfile.styled";
import { IoMdClose } from "react-icons/io";
import { BsCamera } from "react-icons/bs";
import { UploadButton } from "../styles/NewTweet.styled";

function EditProfile({ setEditProfileModal }) {
  const dispatch = useDispatch();

  const handleThemeOptions = (e) => {
    console.log(e.target.value);
    dispatch(changeTheme(e.target.value));
  };

  const { fullUserData, isUserLoading } = useSelector((state) => state.user);

  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");

  const userData = {};
  userData.newData = {};
  userData.userId = JSON.parse(localStorage.getItem("user"))._id;

  const handleSaveButton = (e) => {
    fullName === ""
      ? (userData.newData.name = fullUserData.name)
      : (userData.newData.name = fullName);
    bio === ""
      ? (userData.newData.bio = fullUserData.bio)
      : (userData.newData.bio = bio);
    location === ""
      ? (userData.newData.country = fullUserData.country)
      : (userData.newData.country = location);
    website === ""
      ? (userData.newData.website = fullUserData.website)
      : (userData.newData.website = website);

    console.log(userData);
    dispatch(updateUserData(userData)).then((data) => console.log(data));
    setEditProfileModal((prev) => !prev);
  };

  const imgData = new FormData();

  const handlePhotoUploadButton = async (file) => {
    imgData.append("file", file);
    imgData.append("upload_preset", "lqpivui7kjk78");
    imgData.append("cloud_name", "dmua4axn3");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dmua4axn3/image/upload",
      {
        method: "POST",
        body: imgData,
      }
    );

    const res = await data.json();

    console.log(res.url);

    userData.newData.profilePhoto = res.url;

    dispatch(updateUserData(userData));
  };

  const handleCoverUploadButton = async (file) => {
    imgData.append("file", file);
    imgData.append("upload_preset", "lqpivui7kjk78");
    imgData.append("cloud_name", "dmua4axn3");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dmua4axn3/image/upload",
      {
        method: "POST",
        body: imgData,
      }
    );

    const res = await data.json();

    console.log(res.url);

    userData.newData.coverPhoto = res.url;

    dispatch(updateUserData(userData));
  };

  return (
    <EditProfileBackground>
      {isUserLoading ? (
        "Loading..."
      ) : (
        <EditProfileContainer>
          <ModalBar>
            <CloseIconContainer
              onClick={() => setEditProfileModal((prev) => !prev)}
            >
              <IoMdClose size="1.5rem" />
            </CloseIconContainer>
            <Heading>Edit profile</Heading>
            <FollowUserBtn onClick={handleSaveButton}>Save</FollowUserBtn>
          </ModalBar>
          <UserPhotoCoverContainer>
            <UserCoverContainer>
              <PhotoIconContainer
                title="Add photo"
                onChange={(e) => {
                  handleCoverUploadButton(e.target.files[0]);
                }}
              >
                <BsCamera size="1rem" color="white" />
                <UploadButton type="file" />
              </PhotoIconContainer>
              <UserCover
                src={
                  Object.keys(fullUserData).length > 0 &&
                  fullUserData.coverPhoto
                    ? fullUserData.coverPhoto
                    : "./images/950x350-light-gray-solid-color-background.jpg"
                }
              />
            </UserCoverContainer>

            <UserPhotoContainer>
              <PhotoIconContainer
                title="Add photo"
                onChange={(e) => {
                  handlePhotoUploadButton(e.target.files[0]);
                }}
              >
                <BsCamera size="1rem" color="white" />
                <UploadButton type="file" />
              </PhotoIconContainer>
              <UserPhoto
                src={
                  Object.keys(fullUserData).length > 0 &&
                  fullUserData.profilePhoto
                    ? fullUserData.profilePhoto
                    : "http://localhost:3000/images/blank-profile-picture-gf8e58e24f_640.png"
                }
              />
            </UserPhotoContainer>
          </UserPhotoCoverContainer>
          <ModalForm>
            <ModalInput
              type="text"
              required
              placeholder="Name"
              name="fullName"
              defaultValue={
                Object.keys(fullUserData).length > 0 && fullUserData.name
              }
              onChange={(e) => setFullName(e.target.value)}
            />
            <ModalInput
              type="text"
              placeholder="Bio"
              name="bio"
              defaultValue={
                Object.keys(fullUserData).length > 0 && fullUserData.bio
              }
              onChange={(e) => setBio(e.target.value)}
            />
            <ModalInput
              type="text"
              placeholder="Location"
              name="location"
              defaultValue={
                Object.keys(fullUserData).length > 0 && fullUserData.country
              }
              onChange={(e) => setLocation(e.target.value)}
            />
            <ModalInput
              type="url"
              placeholder="Website"
              name="website"
              defaultValue={
                Object.keys(fullUserData).length > 0 && fullUserData.website
              }
              onChange={(e) => setWebsite(e.target.value)}
            />
          </ModalForm>
        </EditProfileContainer>
      )}
    </EditProfileBackground>
  );
}

export default EditProfile;
