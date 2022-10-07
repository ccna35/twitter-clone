import styled from "styled-components";

export const ChatBoxStyle = styled.div`
  width: 25rem;
  position: fixed;
  right: 2rem;
  bottom: 0;
  background-color: white;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 0px 0px 3px 1px #dde0e3;
  overflow-x: hidden;

  ${(props) =>
    props.visible
      ? "overflow-y: hidden"
      : "overflow-y: scroll"}/* @media (min-width: ${({ theme }) =>
    theme.breakpoints.xxs}) {
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
export const ChatBoxIconsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const ChatBoxIconContainer = styled.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  /* padding: 1rem; */
  width: 2rem;
  height: 2rem;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.LeftMenuBgHoverColor};
  }
`;

export const ChatsContainer = styled.div`
  width: 100%;
  max-height: 100%;
  /* background-color: aliceblue; */
  /* transition: max-height 0.5s; */

  ${(props) => props.visible && "display: none;"}
`;
export const Conversation = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 1rem;
  border-bottom: 1px solid lightgray;
`;
export const UserInfoMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 12rem;
  }
`;
