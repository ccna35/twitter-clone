import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 115vh;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
  }
`;

export const LeftSide = styled.div`
  background-image: url("./images/lohp_en_1302x955.png");
  background-size: cover;
  background-position: center;
  height: 115vh;
  width: 100%;
  padding: 3rem 0px;
  flex-basis: 57%;
  display: grid;
  place-items: center;
  img {
    min-width: 50%;
  }
`;
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 42%;
  padding: 1rem;
  img {
    width: 50px;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 4.5rem;
    margin: 2rem 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 3.5rem;
    }
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  small {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.secColor};
  }

  p {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
`;

export const BtnGroup = styled.div`
  width: 20rem;
  button {
    width: 100%;
    margin: 0.3rem 0;
    &:first-child {
      color: ${({ theme }) => theme.colors.secColor};
      font-weight: 100;
    }
    &:nth-child(4) {
      background-color: ${({ theme }) => theme.colors.mainColor};
      color: white;
      border-color: transparent;
      transition: background-color 0.5s;
      &:hover {
        background-color: ${({ theme }) => theme.colors.hoverBlue};
      }
    }
    &:last-child {
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }
  div {
    width: 100%;
    text-align: center;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 46%;
      height: 1px;
      background-color: #f3f3f3;
      left: 0;
      top: 50%;
    }
    &::after {
      content: "";
      position: absolute;
      width: 46%;
      height: 1px;
      background-color: #f3f3f3;
      right: 0;
      top: 50%;
    }
  }
`;
