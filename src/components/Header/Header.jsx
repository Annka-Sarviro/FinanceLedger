import s from "./Header.styled";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from "react";

const Header = () => {
  const [transparent, setTransparent] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < (isMobile ? 120 : 70);
      setTransparent(isTop);
    };

    setIsMobile(window.innerWidth <= 768);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <s.headerBox transparent={transparent}>
      <s.container>
        <Logo />
        <NavBar />
      </s.container>
    </s.headerBox>
  );
};

export default Header;
