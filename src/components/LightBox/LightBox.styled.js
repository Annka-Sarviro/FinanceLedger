import styled from "styled-components";

const overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 1;
  opacity: ${({ isLoad }) => (isLoad ? 1 : 0)};
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 11;
  overflow-y: scroll;
  pointer-events: initial;
`;

const wrapperGallery = styled.div`
  box-sizing: border-box;
  position: absolute;
  min-width: 280px;
  width: calc(100% - 80px);
  height: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  background-color: var(--white-color);
  border: 4px solid var(--white-color);
  border-radius: var(--border-radius);
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    min-width: 600px;
    width: calc(100% - 400px);
  }

  @media (min-width: 1360px) {
    min-width: 900px;
    width: calc(100% - 750px);
  }
`;

const img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: var(--border-radius);

  opacity: 0;
  opacity: ${({ isChangeImg }) => (!isChangeImg ? 1 : 0)};
  transition: opacity 500ms ease;
`;

const closeBtn = styled.button`
  position: absolute;
  bottom: -44px;
  right: 0;
  font-size: 30px;
  z-index: 10;
  cursor: pointer;
  fill: var(--white-color);
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4));
  opacity: 0.8;
  transition: opacity 1s ease;
  background-color: transparent;
  border: none;
  color: inherit;

  &:hover {
    opacity: 0.4;
  }

  & svg {
    width: 20px;
    height: 20px;
    z-index: 5;

    @media (min-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }
`;

const ctrlBtn = styled.button`
  position: absolute;
  display: flex;
  width: 100px;
  height: 100%;
  align-items: center;
  top: 0;
  cursor: pointer;
  z-index: 10;
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4));
  opacity: 0;
  transition: opacity 1s ease;
  background-color: transparent;
  border: none;
  color: inherit;

  &:hover {
    opacity: 1;
  }

  & svg {
    width: 50px;
    height: 50px;
    opacity: 0.8;
    transition: opacity 1s ease;
  }

  & svg:hover {
    opacity: 0.4;
  }
`;

const leftBtn = styled(ctrlBtn)`
  justify-content: left;
  left: 0;
  visibility: ${({ stopGallery }) =>
    stopGallery === "left" ? "hidden" : "initial"};
`;

const rightBtn = styled(ctrlBtn)`
  justify-content: right;
  right: 0;

  visibility: ${({ stopGallery }) =>
    stopGallery === "right" ? "hidden" : "initial"};
`;

export default { overlay, img, closeBtn, leftBtn, rightBtn, wrapperGallery };
