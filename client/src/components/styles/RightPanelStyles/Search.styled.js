import styled from "styled-components";

export const SearchElement = styled.div`
  padding: 0.3rem 0;
  position: sticky;
  top: 0;
  background-color: white;
`;

export const SearchContainer = styled.form`
  display: inline-flex;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.borderColor};
  border-radius: 10rem;
  padding: 0.7rem 1.5rem;
  width: 100%;
`;

export const SearchInput = styled.input`
  display: inline-flex;
  font-family: inherit;
  font-size: 1rem;
  border: none;
  outline: none;
  flex-grow: 1;
  background: transparent;
`;
