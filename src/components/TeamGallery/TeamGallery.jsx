import s from "./TeamGallery.styled";
import SocialIconBox from "../socialIconBox/socialIconBox";
import teamsGalletyFotoLinks from "../../services/teamsGalletyFotoLinks";

const TeamGallery = () => {
  return (
    <s.teamsGalleryBox>
      {teamsGalletyFotoLinks.slice(0, 3).map((fotolink, ind) => {
        return (
          <s.teamCard key={ind}>
            <s.thumb>
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
                <s.teamsImage
                  src={fotolink._1x}
                  alt={fotolink.alt}
                  width="421"
                />
              </picture>
              <s.socialLayer>
                <SocialIconBox color="white" />
              </s.socialLayer>
            </s.thumb>
            <s.teamTitleColor>{fotolink.name}</s.teamTitleColor>
            <s.teamTextColor>{fotolink.position}</s.teamTextColor>
          </s.teamCard>
        );
      })}
    </s.teamsGalleryBox>
  );
};
export default TeamGallery;
