import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";

const contactBox = styled.section`
  background-color: var(--gray-color-light);
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const container = styled(Container)`
  padding-top: 51px;
  padding-bottom: 25px;
  text-align: left;
  margin: 0;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(100% / 2);
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media (min-width: 1360px) {
    padding-top: 56px;
    padding-bottom: 77px;
    padding-left: 20px;
  }
`;
const contactImg = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 220px;

  @media (min-width: 768px) {
    width: calc(100vw / 2);
    max-height: 354px;
  }

  @media (min-width: 1360px) {
    max-height: 454px;
  }
`;

export default { container, contactBox, contactImg };
