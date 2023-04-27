import s from "./Hero.styled";
import { ButtonColor } from "../Button/Button.styled";

const Hero = () => {
  return (
    <s.heroBox>
      <s.container>
        <s.title>The Sky Is The Limit</s.title>
        <s.subtitle>We provide world class financial assistance</s.subtitle>
        <ButtonColor>
          <s.buttonText>Read More</s.buttonText>
        </ButtonColor>
      </s.container>
    </s.heroBox>
  );
};

export default Hero;
