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

const teamsImage = styled.img`
  width: 100%;
  margin-bottom: 16px;
`;

export default {
  teamsGalleryBox,
  teamsImage,
  teamCard,
  teamTitleColor,
  teamTextColor,
};
