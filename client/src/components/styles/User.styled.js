import styled from "styled-components";

export const UserStyle = styled.main`
  border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  flex-basis: 61%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-grow: 1;
  }
`;

export const UserNavBar = styled.div`
  z-index: 99;
  height: 53px;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: rgba(256, 256, 256, 0.8);
  backdrop-filter: blur(15px);
`;

export const UserNavbarInfo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const UserNavbarFullName = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const UserNavbarTweetCount = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secColor};
`;

export const UserNavbarIconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }
`;

// Cover and User Photo
export const UserPhotoCoverContainer = styled.div`
  width: 100%;
  background-color: lightsalmon;
  position: relative;
`;

// Cover Photo
export const UserCoverContainer = styled.div`
  width: 100%;
  height: 13rem;
  background-color: lightcoral;
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
`;

export const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right top;
  border-radius: 50%;
  border: 4px solid white;
`;

// User Info example: name, birth date... etc
export const UserProfileInfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const UserProfileDescription = styled.p``;

export const UserProfileAboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.secColor};
`;
