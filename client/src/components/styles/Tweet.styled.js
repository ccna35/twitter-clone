import styled from "styled-components";

export const TweetContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 2rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverTweetBg};
  }
`;

export const TweetBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const TweetUpperBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TweetInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
  align-items: center;
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
    width: 2px;
    height: 2px;
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
