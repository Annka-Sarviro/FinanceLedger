import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";

const headerBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : `#333`};
  opacity: ${({ transparent }) => (transparent ? 0.8 : 0.8)};
  transition: background-color 0.3s, opacity 0.3s;
  z-index: 10;
`;

const container = styled(Container)`
  margin-left: auto;
  margin-right: auto;
  padding-top: 26px;
  padding-bottom: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: 100%;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (min-width: 1360px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;
export default { headerBox, container };
