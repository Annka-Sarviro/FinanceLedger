import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  &:not(:first-child) {
    margin-left: 40px;
  }
`;

const NavLinks = styled(NavLink)`
  color: inherit;
`;
export default { NavList, NavItem, NavLinks };
