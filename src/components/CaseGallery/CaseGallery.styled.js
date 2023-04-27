import styled from "styled-components";

const galleryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 421px);
  gap: 24px 20px;
  justify-content: center;
`;

const caseImage = styled.img`
  width: 100%;
`;

export default { galleryBox, caseImage };
