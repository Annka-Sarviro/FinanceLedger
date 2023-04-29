import s from "./NavBar.styled";
import navName from "./navName";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState();
  const [translate, setTranslate] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let isTop = isMobile ? 115 : 80;
      console.log(isTop);
      setTranslate(isTop);
    };

    setIsMobile(window.innerWidth <= 768);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <nav>
      <s.NavList>
        {navName.map((el, ind) => {
          return (
            <s.NavItem key={ind}>
              <s.NavLinks
                activeClass="active"
                to={el.link}
                spy={true}
                smooth={true}
                offset={-translate}
                duration={500}
              >
                {el.name}
              </s.NavLinks>
            </s.NavItem>
          );
        })}
      </s.NavList>
    </nav>
  );
};

export default NavBar;
