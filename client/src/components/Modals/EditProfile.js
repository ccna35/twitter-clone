import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../features/user/userSlice";
import { FollowUserBtn } from "../styles/Button.styled";
import {
  CloseIconContainer,
  EditProfileBackground,
  EditProfileContainer,
  Heading,
  ModalBar,
  ModalForm,
  ModalInput,
  UserCover,
  UserCoverContainer,
  UserPhoto,
  UserPhotoContainer,
  UserPhotoCoverContainer,
} from "../styles/Modals/EditProfile.styled";
import { IoMdClose } from "react-icons/io";

function EditProfile({ setEditProfileModal }) {
  const dispatch = useDispatch();

  const handleThemeOptions = (e) => {
    console.log(e.target.value);
    dispatch(changeTheme(e.target.value));
  };

  const handleSaveButton = (e) => {
    console.log(fullName);
    console.log(bio);
    console.log(location);
    console.log(website);
  };

  // const handleNewUserData

  const { fullUserData, isUserLoading } = useSelector((state) => state.user);

  const [fullName, setFullName] = useState(fullUserData[0].name);
  const [bio, setBio] = useState(fullUserData[0].bio);
  const [location, setLocation] = useState(fullUserData[0].country);
  const [website, setWebsite] = useState(fullUserData[0].website);

  console.log(fullUserData);

  return (
    <EditProfileBackground>
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
            <UserCover
              src={
                fullUserData.length > 0 && fullUserData[0].profilePhoto
                  ? fullUserData[0].profilePhoto
                  : "./images/950x350-light-gray-solid-color-background.jpg"
              }
            />
          </UserCoverContainer>

          <UserPhotoContainer>
            <UserPhoto
              src={
                fullUserData.length > 0 && fullUserData[0].profilePhoto
                  ? fullUserData[0].profilePhoto
                  : "./images/blank-profile-picture-gf8e58e24f_640.png"
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
            defaultValue={fullUserData.length > 0 && fullUserData[0].name}
            onChange={(e) => setFullName(e.target.value)}
          />
          <ModalInput
            type="text"
            placeholder="Bio"
            name="bio"
            defaultValue={fullUserData.length > 0 && fullUserData[0].bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <ModalInput
            type="text"
            placeholder="Location"
            name="location"
            defaultValue={fullUserData.length > 0 && fullUserData[0].country}
            onChange={(e) => setLocation(e.target.value)}
          />
          <ModalInput
            type="url"
            placeholder="Website"
            name="website"
            defaultValue={fullUserData.length > 0 && fullUserData[0].website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </ModalForm>
      </EditProfileContainer>
    </EditProfileBackground>
  );
}

export default EditProfile;
