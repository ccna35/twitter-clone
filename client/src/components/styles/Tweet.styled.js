import styled from "styled-components";

export const TweetContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 2rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.borderColor};
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

export const UserName = styled.p`
  font-weight: 700;
  font-size: 1rem;
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

export const TweetText = styled.p``;

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
  gap: 0.5rem;
  align-items: center;
  transition: color 0.5s;
  &:hover {
    color: ${(props) =>
      props.TextColor === "green"
        ? "#2ecc71"
        : props.TextColor === "red"
        ? "#f64747"
        : ({ theme }) => theme.colors.mainColor};
  }
`;

export const TweetCount = styled.p``;

export const TweetLowerBarIconContainer = styled(TweetUpperBarIconContainer)`
  &:hover {
    background-color: ${(props) =>
      props.IconColor === "green"
        ? "#b7f4d8"
        : props.IconColor === "red"
        ? "#ffe4e4"
        : ({ theme }) => theme.colors.hoverLightBlue};
    color: ${(props) =>
      props.IconColor === "green"
        ? "#2ecc71"
        : props.IconColor === "red"
        ? "#f64747"
        : ({ theme }) => theme.colors.mainColor};
  }
`;
