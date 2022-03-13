import React from "react";
import {
  TrendingNewsBody,
  TrendingContainer,
  TrendingDescription,
  TrendingImage,
  TrendingImageContainer,
  TrendingNewsContainer,
  TrendingTitle,
  WhatsHappeningContainer,
  WhatsHappeningHeader,
  TrendingBar,
  TrendingBarIconContainer,
  TrendingTweetCounts,
  TrendingShowMore,
} from "../styles/RightPanelStyles/WhatsHappening.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function WhatsHappening() {
  return (
    <WhatsHappeningContainer>
      <WhatsHappeningHeader>What’s happening</WhatsHappeningHeader>

      <TrendingNewsContainer>
        <TrendingNewsBody>
          <TrendingTitle>Football . Live</TrendingTitle>
          <TrendingDescription>
            Manchester United vs Brighton & Hove Albion
          </TrendingDescription>
        </TrendingNewsBody>
        <TrendingImageContainer>
          <TrendingImage src="./images/trending-image.jfif" />
        </TrendingImageContainer>
      </TrendingNewsContainer>

      <TrendingContainer>
        <TrendingBar>
          <TrendingTitle>Trending in USA</TrendingTitle>
          <TrendingBarIconContainer>
            <FontAwesomeIcon icon={faEllipsis} size="lg"></FontAwesomeIcon>
          </TrendingBarIconContainer>
        </TrendingBar>
        <TrendingDescription>Lorem ipsum dolor sit amet.</TrendingDescription>
        <TrendingTweetCounts>2,930 Tweets</TrendingTweetCounts>
      </TrendingContainer>

      <TrendingContainer>
        <TrendingBar>
          <TrendingTitle>Programming . Trending</TrendingTitle>
          <TrendingBarIconContainer>
            <FontAwesomeIcon icon={faEllipsis} size="lg"></FontAwesomeIcon>
          </TrendingBarIconContainer>
        </TrendingBar>
        <TrendingDescription>#websitedevelopment</TrendingDescription>
        <TrendingTweetCounts>5,521 Tweets</TrendingTweetCounts>
      </TrendingContainer>

      <TrendingNewsContainer>
        <TrendingNewsBody>
          <TrendingTitle>World news·Last night</TrendingTitle>
          <TrendingDescription>
            Ukraine: Russian video shows tanks leaving annexed Crimea, but NATO
            and the US are disputing the claim
          </TrendingDescription>
        </TrendingNewsBody>
        <TrendingImageContainer>
          <TrendingImage src="./images/1000.jpeg" />
        </TrendingImageContainer>
      </TrendingNewsContainer>

      <TrendingShowMore>Show more</TrendingShowMore>
    </WhatsHappeningContainer>
  );
}

export default WhatsHappening;
