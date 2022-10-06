import styled from "styled-components";

export const ChatBoxStyle = styled.div`
  width: 21rem;
  height: 30rem;
  position: fixed;
  right: 2rem;
  bottom: 0;
  background-color: white;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 0px 0px 3px 1px #dde0e3;
  overflow-x: hidden;
  overflow-y: scroll;
  /* @media (min-width: ${({ theme }) => theme.breakpoints.xxs}) {
    display: none;
  } */
`;

export const ChatBoxBar = styled.div`
  width: 100%;
  height: 3rem;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  backdrop-filter: blur(15px);
  h2 {
    font-weight: 400;
  }
`;
export const ChatBoxIconContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
