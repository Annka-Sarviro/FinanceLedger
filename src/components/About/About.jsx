import s from "./About.styled";
import img from "../../assets/home/people.jpg";
import {
  SectionTitle,
  SectionSubtitle,
  SectionText,
} from "../Layout/Layout.styled";

const About = () => {
  return (
    <s.aboutBox>
      <s.aboutImg src={img} width="670" />
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
