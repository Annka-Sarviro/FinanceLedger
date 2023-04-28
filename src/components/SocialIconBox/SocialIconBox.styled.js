import styled from "styled-components";

const iconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const iconLink = styled.a`
  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover > svg {
    fill: ${(props) => props.color || "#0284D0"};
    opacity: 0.8;
  }
`;

const socialIcon = styled.svg`
  display: block;
  height: 35px;
  fill: white;
  transition: fill 0.5s ease;
  opacity: 1;
`;

export default {
  iconBox,
  socialIcon,
  iconLink,
};
