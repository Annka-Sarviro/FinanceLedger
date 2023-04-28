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
    width: 39px;
    height: 35px;
    margin-right: 4px;

    @media (min-width: 1360px) {
      width: 40px;
      height: 37px;
    }
  }

  &:hover,
  &:focus {
    letter-spacing: 2px;
  }

  &:hover&::before {
    width: 42px;
    height: 39px;
  }

  @media (min-width: 1360px) {
    &:hover&::before {
      width: 43px;
      height: 38px;
    }
  }
`;

const title = styled.p`
  font-size: 28px;
  line-height: 38px;
  color: var(--white-color);

  @media (min-width: 768px) {
    font-size: 35px;
    line-height: 48px;
  }
`;

const subtitle = styled.span`
  color: var(--accent-color);
`;

export default { logoContainer, title, subtitle };
