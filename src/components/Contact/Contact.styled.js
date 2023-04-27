import styled from "styled-components";
import { Container, SectionTitle } from "../Layout/Layout.styled";

const contactBox = styled.section`
  background-color: var(--gray-color-light);
  display: flex;
  min-height: 454px;
`;

const container = styled(Container)`
  padding-left: 20px;
  padding-right: 28px;
  text-align: left;
  margin: 0;
  width: 100%;
`;
const contactImg = styled.img`
  width: 670px;
`;

const contactSectionTitle = styled(SectionTitle)`
  color: var(--text-color);
`;

export default { container, contactBox, contactImg, contactSectionTitle };
