import styled from "styled-components";

export const RightPanelStyle = styled.div`
  flex-basis: 31%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
