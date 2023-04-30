import s from "./CaseGallery.styled";
import galleryfotolinks from "./galleryfotolinks";
import LightBox from "../LightBox/LightBox";
import { useEffect, useState } from "react";

const CaseGallery = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [stopGallery, setStopGallery] = useState();
  const [isChangeImg, setIsChangeImg] = useState(false);

  useEffect(() => {
    if (currentIndex === 0) {
      setStopGallery("left");
    } else if (currentIndex === galleryfotolinks.length - 1) {
      setStopGallery("right");
    } else {
      setStopGallery("");
    }
  }, [currentIndex]);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
    document.body.style.pointerEvents = "none";
    document.body.style.overflowY = "hidden";
  };

  const handelRotationRight = () => {
    setIsChangeImg(true);
    const newIndex = currentIndex + 1;
    const newUrl = galleryfotolinks.filter((item) => {
      return galleryfotolinks.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    setIsChangeImg(true);
    const newIndex = currentIndex - 1;

    const newUrl = galleryfotolinks.filter((item) => {
      return galleryfotolinks.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <s.galleryBox>
        {galleryfotolinks.slice(0, 6).map((fotolink, ind) => {
          return (
            <picture key={ind}>
              <source
                srcSet={`${fotolink._1x_webp} 1x, ${fotolink._2x_webp} 2x`}
                type="image/webp"
                loading="lazy"
              />
              <source
                srcSet={`${fotolink._1x} 1x, ${fotolink._2x} 2x`}
                type="image/jpeg"
                loading="lazy"
              />
              <s.caseImage
                src={fotolink._1x}
                alt={fotolink.alt}
                width="421"
                onClick={() => handleClick(fotolink, ind)}
              />
            </picture>
          );
        })}
      </s.galleryBox>

      <>
        {clickedImg && (
          <LightBox
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
            stopGallery={stopGallery}
            isChangeImg={isChangeImg}
            setIsChangeImg={setIsChangeImg}
          />
        )}
      </>
    </>
  );
};

export default CaseGallery;
