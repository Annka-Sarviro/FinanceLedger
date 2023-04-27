import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";

const headerBox = styled.header`
  background-color: inherit;
`;

const container = styled(Container)`
  margin-left: auto;
  margin-right: auto;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: fit-content;
  width: 100%;
`;
export default { headerBox, container };
