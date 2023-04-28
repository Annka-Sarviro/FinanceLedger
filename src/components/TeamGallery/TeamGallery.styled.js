import styled from "styled-components";
import { SectionTextColor, SectionTitleColor } from "../Layout/Layout.styled";

const teamsGalleryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(280px, 1fr));
  gap: 30px 8px;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(223px, 1fr));
    gap: 18px 18px;
  }

  @media (min-width: 1360px) {
    grid-template-columns: repeat(3, minmax(421px, 1fr));
    gap: 24px 20px;
  }
`;
const teamCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const teamTitleColor = styled(SectionTitleColor)`
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

const teamTextColor = styled(SectionTextColor)`
  margin-bottom: 0;
`;
const socialLayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  transition-property: opacity, background-color, position, visibility;
  transition-duration: 1s;
  transition-timing-function: ease;
`;

const thumb = styled.div`
  margin-bottom: 16px;
  transition: scale 1s ease;
  position: relative;

  &:hover {
    object-fit: cover;
    scale: 1.1;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  &:hover > div {
    background-color: #040404;
    opacity: 0.5;
    visibility: visible;
  }
`;

const teamsImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default {
  teamsGalleryBox,
  teamsImage,
  teamCard,
  teamTitleColor,
  teamTextColor,
  thumb,
  socialLayer,
};
