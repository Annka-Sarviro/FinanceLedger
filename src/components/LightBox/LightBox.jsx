import { useEffect, useState } from "react";
import s from "./LightBox.styled";
import Loader from "../Loader/Loader";

const LightBox = (prop) => {
  const {
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft,
    stopGallery,
    isChangeImg,
    setIsChangeImg,
  } = prop;

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  }, []);

  useEffect(() => {
    if (clickedImg) {
      setTimeout(() => {
        setIsChangeImg(false);
      }, 300);
    }
  }, [clickedImg, setIsChangeImg]);

  const handleClick = (e) => {
    if (e?.target?.classList?.contains("dismiss")) {
      setIsLoad(false);
      document.body.style.pointerEvents = "initial";
      document.body.style.overflowY = "initial";
      setTimeout(() => setClickedImg(null), 500);
    }
  };

  return (
    <>
      <s.overlay
        className="dismiss"
        onClick={handleClick}
        stopGallery={stopGallery}
        isLoad={isLoad}
        isChangeImg={isChangeImg}
      >
        {isChangeImg && <Loader />}
        <s.wrapperGallery stopGallery={stopGallery} isChangeImg={isChangeImg}>
          <picture>
            <source
              srcSet={`${clickedImg._1x_webp} 1x, ${clickedImg._2x_webp} 2x`}
              type="image/webp"
              loading="lazy"
            />
            <source
              srcSet={`${clickedImg._1x} 1x, ${clickedImg._2x} 2x`}
              type="image/jpeg"
              loading="lazy"
            />
            <s.img
              src={clickedImg._1x}
              alt={clickedImg.alt}
              width="421"
              onClick={() => handleClick(clickedImg)}
              isChangeImg={isChangeImg}
            />
          </picture>
          <s.closeBtn className="dismiss" onClick={handleClick}>
            <svg
              className="dismiss"
              width="55"
              height="55"
              viewBox="0 0 55 55"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="dismiss"
                d="M2,5.9c0-1,0.4-2,1.1-2.7C3.8,2.4,4.8,2,5.8,2s2,0.4,2.7,1.1L27.4,22L46.3,3.2C47,2.4,48,2,49,2s2,0.4,2.7,1.1 c0.7,0.7,1.1,1.7,1.1,2.7s-0.4,2-1.1,2.7l-19,19l19,19c0.7,0.7,1.1,1.7,1.1,2.7c0,1-0.4,2-1.1,2.7S50,53,49,53c-1,0-2-0.4-2.7-1.1 L27.4,33.1L8.5,52C7.8,52.7,6.9,53,5.8,53c-1,0-2-0.4-2.7-1.1c-0.7-0.7-1.1-1.7-1.1-2.7c0-1,0.4-2,1.1-2.7l19-19l-19-19 C2.4,7.9,2,6.9,2,5.9z"
              />
            </svg>
          </s.closeBtn>
          <s.leftBtn onClick={handelRotationLeft} stopGallery={stopGallery}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </s.leftBtn>
          <s.rightBtn onClick={handelRotationRight} stopGallery={stopGallery}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </s.rightBtn>
        </s.wrapperGallery>
      </s.overlay>
    </>
  );
};

export default LightBox;
