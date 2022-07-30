import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ThemeOption,
  ThemeOptionLabel,
  ThemeOptionsBtn,
  ThemesModalContainer,
  ThemesOptionContainer,
  ThemesOptionsContainer,
} from "../styles/Modals/ThemesModal.styled";
import { changeTheme } from "../../features/user/userSlice";

function ThemesModal({ popupRef, setThemesModal }) {
  const dispatch = useDispatch();

  const handleThemeOptions = (e) => {
    dispatch(changeTheme(e.target.value));
  };

  return (
    <ThemesModalContainer ref={popupRef}>
      <ThemesOptionsContainer>
        <ThemesOptionContainer>
          <ThemeOption
            type="radio"
            id="light"
            name="fav_theme"
            value="light"
            onChange={(e) => handleThemeOptions(e)}
          ></ThemeOption>
          <ThemeOptionLabel htmlFor="light">Light</ThemeOptionLabel>
        </ThemesOptionContainer>
        <ThemesOptionContainer>
          <ThemeOption
            type="radio"
            id="dim"
            name="fav_theme"
            value="dim"
            onChange={(e) => handleThemeOptions(e)}
          ></ThemeOption>
          <ThemeOptionLabel htmlFor="dim">Dim</ThemeOptionLabel>
        </ThemesOptionContainer>
        <ThemesOptionContainer>
          <ThemeOption
            type="radio"
            id="dark"
            name="fav_theme"
            value="dark"
            onChange={(e) => handleThemeOptions(e)}
          ></ThemeOption>
          <ThemeOptionLabel htmlFor="dark">Dark</ThemeOptionLabel>
        </ThemesOptionContainer>
      </ThemesOptionsContainer>
      <ThemeOptionsBtn onClick={() => setThemesModal((prev) => !prev)}>
        Done
      </ThemeOptionsBtn>
    </ThemesModalContainer>
  );
}

export default ThemesModal;
