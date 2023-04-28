import s from "./TeamGallery.styled";
import teamsGalletyFotoLinks from "./teamsGalletyFotoLinks";

const TeamGallery = () => {
  return (
    <s.teamsGalleryBox>
      {teamsGalletyFotoLinks.slice(0, 3).map((fotolink, ind) => {
        return (
          <s.teamCard key={ind}>
            <picture>
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
              <s.teamsImage src={fotolink._1x} alt={fotolink.alt} width="421" />
            </picture>
            <s.teamTitleColor>{fotolink.name}</s.teamTitleColor>
            <s.teamTextColor>{fotolink.position}</s.teamTextColor>
          </s.teamCard>
        );
      })}
    </s.teamsGalleryBox>
  );
};
export default TeamGallery;
