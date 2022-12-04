import styled from "styled-components";

export const RegisterModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  position: fixed;
`;

export const RegisterModal = styled.div`
  padding: 2rem;
  width: min(100vw, 40rem);
  background-color: white;
  border-radius: 1rem;
`;

export const Heading = styled.h2`
  margin-bottom: 1rem;
`;

export const ModalForm = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const ModalInput = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  outline: none;
  transition: border-color 0.5s;
  &:focus {
    border-color: grey;
  }
`;

export const DateOfBirthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const DateOfBirthSelect = styled.select`
  flex-grow: 1;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  outline: none;
  transition: border-color 0.5s;
  &:focus {
    border-color: grey;
  }
  option {
    font-size: 1rem;
  }
`;

export const CloseIconContainer = styled.div`
  background-color: white;
  margin-bottom: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: background-color 0.5s;
  &:hover {
    background-color: #c8c7cc;
  }
`;
