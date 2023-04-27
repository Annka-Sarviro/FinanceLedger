import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";

const footerBox = styled.section`
  text-align: center;
  background-color: var(--bg-color-add);
`;

const container = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const iconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const copyrightBox = styled.div`
  margin-top: 10px;
`;
const iconLink = styled.a`
  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover > svg {
    fill: var(--accent-color);
  }
`;
const socialIcon = styled.svg`
  display: block;
  height: 35px;
  fill: white;
`;
export default {
  container,
  footerBox,
  iconBox,
  copyrightBox,
  socialIcon,
  iconLink,
};
