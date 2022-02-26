import styled from "styled-components";

export const NewTweetStyle = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
`;

export const UserPhotoContainer = styled.div`
  width: ${(props) => (props.size === "small" ? "40px" : "50px")};
  height: ${(props) => (props.size === "small" ? "40px" : "50px")};
`;

export const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: right top;
`;

export const TweetForm = styled.form`
  padding: 1rem 0;
  flex-grow: 1;
`;

export const TweetInput = styled.input`
  background-color: ${({ theme }) => theme.colors.InputBgColor};
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: inherit;
  font-weight: 300;
  &::placeholder {
    font-size: 1.5rem;
  }
`;

export const WhoCanReplyContainer = styled.div`
  padding: 0.2rem 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  border-radius: 10rem;
  color: ${({ theme }) => theme.colors.mainColor};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightBlue};
  }
`;

export const WhoCanReplyText = styled.p`
  font-weight: 600;
`;

export const TweetOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin-top: 1rem;
  padding-top: 1rem;
`;

export const TweetIconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const TweetIconContainer = styled.div`
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.mainColor};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightBlue};
  }
`;
