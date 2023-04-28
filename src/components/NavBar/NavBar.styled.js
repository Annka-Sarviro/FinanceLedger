import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  position: relative;

  &:not(:first-child) {
    margin-left: 12px;

    @media (min-width: 768px) {
      margin-left: 20px;
    }

    @media (min-width: 1360px) {
      margin-left: 40px;
    }
  }

  &:hover&::after {
    content: "";
    width: 100%;
    padding: 0 4px;
    height: 2px;
    border-radius: 1px;
    display: inline-block;
    background-color: var(--accent-color);
    position: absolute;
    left: -3px;
    bottom: -2px;
  }
`;

const NavLinks = styled(NavLink)`
  color: inherit;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export default { NavList, NavItem, NavLinks };
