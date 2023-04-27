import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";
import { ButtonWhite } from "../Button/Button.styled";

const blogBox = styled.section`
  background-color: var(--blue-color);
  display: flex;
`;

const container = styled(Container)`
  margin-left: 0;
  margin-right: 0;
  max-width: 690px;
`;
const blogImg = styled.img`
  width: 670px;
  height: 100%;
`;

const buttonWhiteBlue = styled(ButtonWhite)`
  &:hover,
  &:focus {
    color: var(--blue-color);
    border-color: var(--blue-colors);
  }
`;
export default { container, blogBox, blogImg, buttonWhiteBlue };
