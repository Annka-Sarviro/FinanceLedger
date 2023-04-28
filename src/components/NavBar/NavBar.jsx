import s from "./NavBar.styled";
import navName from "./navName";

const NavBar = () => {
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
                offset={-100}
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
