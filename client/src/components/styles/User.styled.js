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
  background-color: ${({ theme }) => theme.colors.NavbarBgColor};
  backdrop-filter: blur(15px);
`;

export const UserNavbarInfo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  flex-grow: 1;
`;

export const UserNavbarFullName = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColor};
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
  color: ${({ theme }) => theme.colors.textColor};
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
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

// User Info example: name, birth date... etc
export const UserProfileInfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const UserProfileDescription = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
`;

export const UserProfileAboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.secColor};
`;

export const AboutSingleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const AboutSingleText = styled.p`
  color: ${(props) =>
    props.link
      ? ({ theme }) => theme.colors.mainColor
      : ({ theme }) => theme.colors.secColor};
`;

// Following & Followers Info
export const FollowingFollowersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.secColor};
`;

export const FollowContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  color: ${({ theme }) => theme.colors.secColor};
`;

export const FollowCount = styled.p`
  color: black;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const FollowText = styled.p``;

// User Tweets & Replies section
export const TweetsRepliesBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const TweetsRepliesBarItem = styled.div`
  flex-grow: 1;
  padding: 1rem 0;
  display: grid;
  place-items: center;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }
`;

export const TweetsRepliesBarText = styled.p`
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.colors.EditProfileTextColor
      : ({ theme }) => theme.colors.secColor};
  ${(props) => props.active && "font-weight: 600;"}
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -85%;
    width: ${(props) => props.active && "100%"};
    height: 4px;
    border-radius: 10rem;
    background-color: ${({ theme }) => theme.colors.mainColor};
    transition: width 0.5s;
  }
`;
