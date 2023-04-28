import s from "./Footer.styled";
import SocialIconBox from "../socialIconBox/socialIconBox";

const Footer = () => {
  return (
    <s.footerBox>
      <s.container>
        <SocialIconBox color="#2EBF4F" />
        <s.copyrightBox>Copyright &copy; 2021 - FinanceLedger</s.copyrightBox>
      </s.container>
    </s.footerBox>
  );
};

export default Footer;
