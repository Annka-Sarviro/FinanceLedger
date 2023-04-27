import styled from "styled-components";
import { Container } from "../Layout/Layout.styled";
import heroCover from "../../assets/home/showcase.jpg";
import heroCover2x from "../../assets/home/showcase@2x.jpg";
import heroCoverWebp from "../../assets/home/showcase.webp";
import heroCoverWebp2x from "../../assets/home/showcase@2x.webp";
import buttonImg from "../../assets/home/img-button.svg";

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
  width: auto;
`;

const container = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const title = styled.h1`
  font-weight: 600;
  font-size: 55px;
  line-height: 75px;
  margin-bottom: 16px;
`;

const subtitle = styled.h2`
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 24px;
`;

const buttonText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    display: block;
    width: 7px;
    height: 11px;
    content: "";
    background-image: url(${buttonImg});
    margin-right: 8px;
  }
`;

export default { heroBox, container, title, subtitle, buttonText };
