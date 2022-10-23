import styled from "styled-components";

export const NewReplyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const NewReplyContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4rem 1fr;
  /* gap: 1rem; */
`;

export const NewReplyBottomContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ReplyingTo = styled.p`
  color: ${({ theme }) => theme.colors.secColor};

  ${(props) => !props.removeMargin && "margin-bottom: 1rem;"}
  a {
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;
