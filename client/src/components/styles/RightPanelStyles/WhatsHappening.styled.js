import styled from "styled-components";

export const WhatsHappeningContainer = styled.div`
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.bgColor};
  overflow: hidden;
`;

export const WhatsHappeningHeader = styled.h2`
  padding: 1rem;
`;

export const TrendingNewsContainer = styled.div`
  padding: 1rem;
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 5rem;
  gap: 1rem;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }
`;

export const TrendingContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }
`;

export const TrendingBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TrendingBarIconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightBlue};
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

export const TrendingNewsBody = styled.div``;

export const TrendingTitle = styled.p`
  color: ${({ theme }) => theme.colors.secColor};
  font-size: 0.9rem;
`;

export const TrendingTweetCounts = styled(TrendingTitle)``;

export const TrendingDescription = styled.p`
  font-weight: 600;
`;

export const TrendingImageContainer = styled.div`
  flex-basis: 9rem;
  height: 4rem;
`;

export const TrendingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.7rem;
`;

export const TrendingShowMore = styled.p`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.mainColor};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }
`;
