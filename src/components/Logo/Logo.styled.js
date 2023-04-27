import styled from "styled-components";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const logoContainer = styled(Link)`
  display: flex;
  align-items: center;

  &::before {
    display: inline-block;
    content: "";
    background-image: url(${logoImg});
    background-size: contain;
    background-repeat: no-repeat;
    width: 40px;
    height: 37px;
    margin-right: 4px;
  }

  &:hover,
  &:focus {
    letter-spacing: 2px;
  }

  &:hover&::before {
    width: 43px;
  }
`;

const title = styled.p`
  font-size: 35px;
  line-height: 48px;
  color: var(--white-color);
`;

const subtitle = styled.span`
  color: var(--accent-color);
`;
export default { logoContainer, title, subtitle };
