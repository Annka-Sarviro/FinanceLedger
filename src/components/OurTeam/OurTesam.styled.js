import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";

const ourTeamBox = styled.section`
  text-align: center;
`;

const container = styled(Container)`
  padding-top: 72px;
  padding-bottom: 50px;

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 42px;
  }

  @media (min-width: 1360px) {
    padding-top: 80px;
    padding-bottom: 88px;
  }
`;

export default { container, ourTeamBox };
