import s from "./Logo.styled";

const Logo = () => {
  return (
    <s.logoContainer href="./">
      <s.title>
        Finance <s.subtitle>Ledger</s.subtitle>
      </s.title>
    </s.logoContainer>
  );
};

export default Logo;
