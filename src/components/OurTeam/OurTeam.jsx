import TeamGallery from "../TeamGallery/TeamGallery";
import s from "./OurTesam.styled";
import {
  SectionTitleColor,
  SectionSubtitleColor,
  SectionTextColor,
} from "../Layout/Layout.styled";

const OurTeam = () => {
  return (
    <s.ourTeamBox>
      <s.container>
        <SectionSubtitleColor>This is what we do</SectionSubtitleColor>
        <SectionTitleColor>Business Cases</SectionTitleColor>
        <SectionTextColor>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </SectionTextColor>
        <TeamGallery />
      </s.container>
    </s.ourTeamBox>
  );
};

export default OurTeam;
