import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";
import { ButtonWhite } from "../Button/Button.styled";

const aboutBox = styled.section`
  background-color: var(--accent-color);
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const container = styled(Container)`
  padding-bottom: 80px;
  @media (min-width: 768px) {
    width: calc(100% / 2);
  }

  @media (min-width: 1360px) {
  }
`;
const aboutImg = styled.img`
  width: auto;

  @media (min-width: 768px) {
    width: calc(100vw / 2);
    object-fit: cover;
  }
`;

const buttonWhiteGreen = styled(ButtonWhite)`
  &:hover,
  &:focus {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }
`;
export default { container, aboutBox, aboutImg, buttonWhiteGreen };
