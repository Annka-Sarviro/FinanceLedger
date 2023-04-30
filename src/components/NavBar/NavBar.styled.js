import styled from "styled-components";
import { Link } from "react-scroll";

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

  &::after {
    content: "";
    width: 0;
    height: 0;
    transition: width 1s ease;
  }

  &:hover&::after {
    width: 100%;
    padding: 0 4px;
    height: 2px;
    border-radius: 1px;

    background-color: var(--accent-color);
    position: absolute;
    left: -3px;
    bottom: -2px;
    transition: width 0.3s ease;
  }
`;

const NavLinks = styled(Link)`
  color: inherit;
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export default { NavList, NavItem, NavLinks };
