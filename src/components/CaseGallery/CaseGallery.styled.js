import styled from "styled-components";

const galleryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 8px 8px;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(223px, 1fr));
    gap: 18px 18px;
  }

  @media (min-width: 1360px) {
    grid-template-columns: repeat(auto-fill, minmax(421px, 1fr));
    gap: 24px 20px;
  }
`;

const caseImage = styled.img`
  width: 100%;
`;

export default { galleryBox, caseImage };
