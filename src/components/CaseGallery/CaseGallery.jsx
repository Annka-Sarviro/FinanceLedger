import s from "./CaseGallery.styled";
import galleryfotolinks from "./galleryfotolinks";

const CaseGallery = () => {
  return (
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
            <s.caseImage src={fotolink._1x} alt={fotolink.alt} width="421" />
          </picture>
        );
      })}
    </s.galleryBox>
  );
};

export default CaseGallery;
