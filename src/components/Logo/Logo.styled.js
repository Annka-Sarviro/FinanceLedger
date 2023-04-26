import styled from "styled-components";
import logoImg from "../../assets/logo.svg";

const logoContainer = styled.div`
  display: flex;
  align-items: center;

  &::before {
    display: inline-block;
    content: "";
    background-image: url(${logoImg});
    width: 40px;
    height: 37px;
    margin-right: 4px;
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
