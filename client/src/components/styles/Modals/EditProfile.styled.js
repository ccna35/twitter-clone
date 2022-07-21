import styled from "styled-components";

export const EditProfileBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  display: grid;
  place-items: center;
`;

export const EditProfileContainer = styled.div`
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
// Cover and User Photo
export const UserPhotoCoverContainer = styled.div`
  width: 100%;
  position: relative;
`;

// Cover Photo
export const UserCoverContainer = styled.div`
  width: 100%;
  height: 13rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 10rem;
  }
`;

export const UserCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// User Photo
export const UserPhotoContainer = styled.div`
  position: absolute;
  bottom: -65px;
  left: 28px;
  width: 130px;
  height: 130px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 90px;
    height: 90px;
    bottom: -55px;
    left: 20px;
  }
`;

export const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right top;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.userPhotoBorder};
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    border-width: 2px;
  }
`;
