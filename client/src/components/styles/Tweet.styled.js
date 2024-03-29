import styled from "styled-components";

export const TweetContainer = styled.div`
  display: ${(props) => (props.tweetPage ? "flex" : "grid")};
  ${(props) =>
    props.tweetPage
      ? "flex-direction: column"
      : "grid-template-columns: 2rem 1fr;"};

  gap: ${(props) => (props.tweetPage ? "1rem" : "2rem")};
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }

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

export const TweetBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  ${(props) => (props.reply ? "gap: 0.25rem;" : "gap: 0.8rem;")};
`;

export const TweetUpperBar = styled.div`
  /* z-index: -1; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TweetInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) => (props.tweetPage ? "gap: 0rem" : "gap: 0.6rem")};
  /* align-items: center; */
  ${(props) =>
    props.tweetPage ? "align-items: flex-start" : "align-items: center"};
  ${(props) => props.tweetPage && "flex-direction: column"};
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const UserHandle = styled.p`
  color: ${({ theme }) => theme.colors.secColor};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    ${(props) => !props.tweetPage && "width: 2px"};
    ${(props) => !props.tweetPage && "height: 2px"};
    background-color: ${({ theme }) => theme.colors.secColor};
    top: 55%;
    right: -0.3rem;
    border-radius: 50%;
  }
`;

export const TimeSincePosted = styled.p`
  color: ${({ theme }) => theme.colors.secColor};
`;

export const TweetText = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
`;

export const TweetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 1.5rem;
`;

export const TweetUpperBarIconContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.secColor};
  transition: background-color 0.5s, color 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightBlue};
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

export const TweetLowerBar = styled.div`
  /* z-index: -1; */
  display: flex;
  gap: 15%;
  color: ${({ theme }) => theme.colors.secColor};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: space-between;
    gap: 0;
  }
`;

export const TweetIconCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.5s;
  cursor: pointer;
  color: ${(props) => props.active && "#07e938"};
  &:hover {
    div {
      background-color: ${(props) =>
        props.IconColor === "green"
          ? "#0abd411f"
          : props.IconColor === "red"
          ? "#eb0c4036"
          : ({ theme }) => theme.colors.hoverLightBlue};
      color: ${(props) =>
        props.IconColor === "green"
          ? "#07e938"
          : props.IconColor === "red"
          ? "#eb0770"
          : ({ theme }) => theme.colors.mainColor};
    }

    p {
      color: ${(props) =>
        props.IconColor === "green"
          ? "#07e938"
          : props.IconColor === "red"
          ? "#eb0770"
          : ({ theme }) => theme.colors.mainColor};
    }
  }
`;

export const UserVerifiedIconContainer = styled.div`
  color: ${({ theme }) => theme.colors.VerifiedBadge};
  display: flex;
`;

export const TweetCount = styled.p`
  transition: color 0.5s;
  color: ${(props) => props.active && props.active === true && "#eb0770"};
`;

export const TweetAuthor = styled.p``;

export const TweetLowerBarIconContainer = styled(TweetUpperBarIconContainer)`
  color: ${(props) => props.active && "#07e938"};
`;

export const TweetPopUp = styled.div`
  z-index: 99;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 8px 0px #c7c7c7;
  position: absolute;
  right: 0;
  top: 0;
  width: 19rem;
  /* height: 12rem; */
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.BgColor};
  svg {
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: block;
    }
  }
`;

export const TweetPopUpOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: background-color 0.5s;
  color: ${(props) => props.red && "#f4212e"};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }
`;

export const TweetPopUpIconContainer = styled.div`
  padding: 1rem;
  /* margin-right: 1rem; */
`;

export const TweetPopUpText = styled.p`
  /* padding: 1rem; */
`;

export const TweetPhotoNameContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
