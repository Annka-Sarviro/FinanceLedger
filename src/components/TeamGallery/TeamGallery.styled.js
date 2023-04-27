import styled from "styled-components";

const teamsGalleryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 421px);
  gap: 24px 20px;
  justify-content: center;
`;

const teamsImage = styled.img`
  width: 100%;
`;

export default { teamsGalleryBox, teamsImage };
