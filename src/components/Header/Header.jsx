import s from "./Header.styled";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <s.headerBox>
      <s.container>
        <Logo />
        <NavBar />
      </s.container>
    </s.headerBox>
  );
};

export default Header;
