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
  max-height: 402px;

  @media (min-width: 768px) {
    width: calc(100% / 2);
    padding-top: 32px;
    padding-bottom: 32px;
    max-height: 442px;
  }

  @media (min-width: 1360px) {
    padding-top: 56px;
    padding-bottom: 77px;
    padding-left: 20px;
    max-height: 454px;
  }
`;
const contactImg = styled.img`
  width: 100vw;
  object-fit: cover;
  height: 100%;

  @media (min-width: 768px) {
    width: calc(100vw / 2);
  }

  @media (min-width: 1360px) {
  }
`;

export default { container, contactBox, contactImg };
