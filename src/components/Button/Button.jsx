import { ButtonStyled } from "./Button.styled";

const Button = (prop) => {
  return (
    <ButtonStyled type="button" onClick={prop.onClick}>
      {prop.children}
    </ButtonStyled>
  );
};

export default Button;
