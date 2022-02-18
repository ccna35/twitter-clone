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
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.FollowBgHoverColor};
  }
`;

export const EditProfileBtn = styled(FollowUserBtn)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 15rem;
  color: black;
  align-self: flex-end;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.borderGreyColor};
  background-color: ${({ theme }) => theme.colors.EditProfileBgColor};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }
`;
