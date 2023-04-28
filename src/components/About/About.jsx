import s from "./About.styled";
import img_1x from "../../assets/home/people.jpg";
import img_2x from "../../assets/home/people@2x.jpg";
import img_webp_1x from "../../assets/home/people.webp";
import img_webp_2x from "../../assets/home/people@2x.webp";
import {
  SectionTitle,
  SectionSubtitle,
  SectionText,
} from "../Layout/Layout.styled";

const About = () => {
  return (
    <s.aboutBox>
      <picture>
        <source
          srcSet={`${img_webp_1x} 1x, ${img_webp_2x} 2x`}
          type="image/webp"
          loading="lazy"
        />
        <source
          srcSet={`${img_1x} 1x, ${img_2x} 2x`}
          type="image/jpeg"
          loading="lazy"
        />
        <s.aboutImg src={img_1x} alt="our command fotoa" width="670" />
      </picture>

      <s.container>
        <SectionSubtitle>What you are looking for</SectionSubtitle>
        <SectionTitle>We provide bespoke solutions</SectionTitle>
        <SectionText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </SectionText>
        <s.buttonWhiteGreen>Read More</s.buttonWhiteGreen>
      </s.container>
    </s.aboutBox>
  );
};

export default About;
