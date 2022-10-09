import styled from "styled-components";

export const ChatBoxStyle = styled.div`
  width: 25rem;
  max-height: 33rem;
  position: fixed;
  right: 2rem;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.BgColor};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 0px 0px 9px -2px #7e7e7e;
  overflow: auto;
  /* overflow-x: hidden;
  overflow-y: ${(props) => (props.visible ? "scroll" : "hidden")}; */

  /* @media (min-width: ${({ theme }) => theme.breakpoints.xxs}) {
    display: none;
  } */
`;

export const ChatBoxBar = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  backdrop-filter: blur(15px);
  color: ${({ theme }) => theme.colors.textColor};
  /* position: fixed;
  z-index: 999; */
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
  /* margin-top: 3.5rem; */

  ${(props) => props.visible === false && "display: none;"}
`;

export const Conversation = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 1rem;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }
`;

export const UserInfoMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChatText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 14rem;
  color: ${({ theme }) => theme.colors.secColor};
`;
