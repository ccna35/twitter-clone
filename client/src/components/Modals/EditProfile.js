import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../features/user/userSlice";
import {
  EditProfileBackground,
  EditProfileContainer,
  UserCover,
  UserCoverContainer,
  UserPhoto,
  UserPhotoContainer,
  UserPhotoCoverContainer,
} from "../styles/Modals/EditProfile.styled";

function EditProfile() {
  const dispatch = useDispatch();

  const handleThemeOptions = (e) => {
    console.log(e.target.value);
    dispatch(changeTheme(e.target.value));
  };

  const { fullUserData, isUserLoading } = useSelector((state) => state.user);

  return (
    <EditProfileBackground>
      <EditProfileContainer>
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
      </EditProfileContainer>
    </EditProfileBackground>
  );
}

export default EditProfile;
