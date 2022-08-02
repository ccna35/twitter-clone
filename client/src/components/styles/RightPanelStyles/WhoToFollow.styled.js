import styled from "styled-components";

export const WhoToFollowContainer = styled.div`
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.RightPanelBgColor};
  overflow: hidden;
`;

export const WhoToFollowHeader = styled.h2`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const FollowUserContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: ${(props) =>
    props.search ? "3rem 1fr" : "3rem 1fr 5rem"};
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }
`;

export const FollowUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${(props) => props.search && "align-items: flex-start;"};
`;

export const FollowUserName = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const FollowUserHandle = styled.p`
  color: ${({ theme }) => theme.colors.secColor};
`;
