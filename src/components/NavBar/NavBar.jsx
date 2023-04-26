import s from "./NavBar.styled";
import navName from "./navName";

const NavBar = () => {
  return (
    <nav>
      <s.NavList>
        {navName.map((el, ind) => {
          return (
            <s.NavItem key={ind}>
              <s.NavLinks href={el.link}>{el.name}</s.NavLinks>
            </s.NavItem>
          );
        })}
      </s.NavList>
    </nav>
  );
};

export default NavBar;
