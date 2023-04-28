import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";
import { ButtonWhite } from "../Button/Button.styled";

const blogBox = styled.section`
  background-color: var(--blue-color);
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

const container = styled(Container)`
  padding-top: 48px;
  padding-bottom: 58px;
  max-height: 466px;

  @media (min-width: 768px) {
    padding-top: 59px;
    padding-bottom: 59px;
    max-height: 493px;
    width: calc(100% / 2);
  }

  @media (min-width: 1360px) {
    padding-top: 80px;
    padding-bottom: 80px;
    max-height: 452px;
  }
`;

const blogImg = styled.img`
  width: 100vw;
  object-fit: cover;
  height: 100%;

  @media (min-width: 768px) {
    width: calc(100vw / 2);
  }
`;

const buttonWhiteBlue = styled(ButtonWhite)`
  &:hover,
  &:focus {
    color: var(--blue-color);
    border-color: var(--blue-colors);
  }
`;
export default { container, blogBox, blogImg, buttonWhiteBlue };
