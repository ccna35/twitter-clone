import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 15rem;
  border: 1px solid #c8c7cc;
  background-color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: #f6f6f6;
  }
  img {
    width: 20px !important;
    margin: 0 !important;
    vertical-align: bottom;
  }
`;

export const MainTweetBtn = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  border: none;
  outline: none;
  border-radius: 15rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBlue};
  }
`;

export const FollowUserBtn = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  border: none;
  outline: none;
  border-radius: 15rem;
  background-color: ${({ theme }) => theme.colors.FollowBgColor};
  color: ${({ theme }) => theme.colors.FollowTextColor};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.FollowBgHoverColor};
  }
  align-self: flex-end;
`;

export const EditProfileBtn = styled(FollowUserBtn)`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 15rem;
  color: black;
  align-self: flex-end;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.secColor};
  background-color: ${({ theme }) => theme.colors.EditProfileBgColor};
  color: ${({ theme }) => theme.colors.EditProfileTextColor};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }
`;

export const AuthButton = styled.button`
  border: none;
  outline: none;
  border-radius: 15rem;
  font-weight: 600;
  padding: 1rem;
  background-color: #0f1419;
  color: white;
  font-size: 1rem;
  transition: background-color 0.5s;
  &:hover {
    background-color: #333;
  }
`;
