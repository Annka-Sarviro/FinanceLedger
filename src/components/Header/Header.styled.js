import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";

const headerBox = styled.header`
  background-color: inherit;
`;

const container = styled(Container)`
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: auto;
  width: 100%;
`;
export default { headerBox, container };
