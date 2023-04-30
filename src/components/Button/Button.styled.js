import styled from "styled-components";

export const ButtonStyled = styled.button`
  min-width: 155px;
  padding: 16px;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  box-sizing: border-box;
  transition: all 1s ease;
`;

export const ButtonWhite = styled(ButtonStyled)`
  background-color: transparent;
  border: 1px solid var(--white-color);
  color: inherit;
  &:hover,
  &:focus {
    background-color: var(--white-color);
    border-color: inherit;
    color: inherit;
  }
`;

export const ButtonColor = styled(ButtonStyled)`
  background-color: var(--accent-color);
  color: inherit;

  &:hover,
  &:focus {
    background-color: var(--accent-color-light);
  }
`;
