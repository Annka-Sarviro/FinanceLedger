import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";

const casesBox = styled.section`
  text-align: center;
`;

const container = styled(Container)`
  padding-top: 56px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 40px;
  }

  @media (min-width: 1360px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export default { container, casesBox };
