import CaseGallery from "../CaseGallery/CaseGallery";
import s from "./Cases.styles";
import {
  SectionTitleColor,
  SectionSubtitleColor,
  SectionTextColor,
} from "../Layout/Layout.styled";

const Cases = () => {
  return (
    <s.casesBox>
      <s.container>
        <SectionSubtitleColor>This is what we do</SectionSubtitleColor>
        <SectionTitleColor>Business Cases</SectionTitleColor>
        <SectionTextColor>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </SectionTextColor>
        <CaseGallery />
      </s.container>
    </s.casesBox>
  );
};

export default Cases;
