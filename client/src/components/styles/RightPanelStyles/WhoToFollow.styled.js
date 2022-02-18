import styled from "styled-components";

export const WhoToFollowContainer = styled.div`
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.bgColor};
  overflow: hidden;
`;

export const WhoToFollowHeader = styled.h2`
  padding: 1rem;
`;

export const FollowUserContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 3rem 1fr 5rem;
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
`;

export const FollowUserName = styled.p`
  font-weight: 700;
`;

export const FollowUserHandle = styled.p`
  color: ${({ theme }) => theme.colors.secColor};
`;
