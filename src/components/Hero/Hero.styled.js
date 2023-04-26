import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";
import heroCover from "../../assets/home/showcase.jpg";
import heroCover2x from "../../assets/home/showcase@2x.jpg";
import heroCoverWebp from "../../assets/home/showcase.webp";
import heroCoverWebp2x from "../../assets/home/showcase@2x.webp";

const heroBox = styled.div`
  background: var(--bg-cover), url(${heroCover});
  background-image: var(--bg-cover),
    image-set(url(${heroCover}) 1x, url(${heroCover2x}) 2x);
  background-image: var(--bg-cover),
    -webkit-image-set(url(${heroCover}) 1x, url(${heroCover2x}) 2x);
  background-image: var(--bg-cover),
    image-set(url(${heroCoverWebp}) 1x, url(${heroCoverWebp2x}) 2x);
  background-image: var(--bg-cover),
    -webkit-image-set(url(${heroCoverWebp}) 1x, url(${heroCoverWebp2x}) 2x);

  height: 768px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const container = styled(Container)`
  padding-top: 32px;
`;
export default { heroBox, container };
