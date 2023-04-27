import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";
import { ButtonWhite } from "../Button/Button.styled";

const aboutBox = styled.section`
  background-color: var(--accent-color);
  display: flex;
`;

const container = styled(Container)`
  padding-left: 20px;
  padding-right: 0;
  width: calc(100vw - 730px);
  margin-left: 0;
  margin-right: 0;
  max-width: 690px;
`;
const aboutImg = styled.img`
  width: 670px;
  height: 100%;
`;

const buttonWhiteGreen = styled(ButtonWhite)`
  &:hover,
  &:focus {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }
`;
export default { container, aboutBox, aboutImg, buttonWhiteGreen };
