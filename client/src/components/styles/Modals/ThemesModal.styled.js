import styled from "styled-components";

export const ThemesModalContainer = styled.div`
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 8px 0px #c7c7c7;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35rem;
  height: 25rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.BgColor};

  animation-duration: 1s;
  animation-name: fadein;
  animation-timing-function: ease-in-out;

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 100%;
    }
  }
`;
export const ThemesOptionsContainer = styled.div`
  border-radius: 0.5rem;
  /* background-color: lightseagreen; */
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
`;

export const ThemesOptionContainer = styled.div`
  border-radius: 0.25rem;
  background-color: lightcyan;
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const ThemeOption = styled.input`
  outline: lightblue;
  width: 1.2rem;
  height: 1.2rem;
  &:checked {
  }
`;
export const ThemeOptionLabel = styled.label`
  font-size: 1.2rem;
  flex-grow: 1;
`;

export const ThemeOptionsBtn = styled.div`
  border-radius: 5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: white;
  font-size: 1.2rem;
  user-select: none;
  cursor: pointer;
`;
