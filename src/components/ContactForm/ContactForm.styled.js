import styled from "styled-components";
import { Form, Field } from "formik";
import errorImg from "../../assets/form/worning1.svg";

const formBox = styled.div`
  position: relative;
`;

const placeholder = styled.p`
  position: absolute;
  top: 16px;
  left: 8px;
  color: var(--gray-color);
  transition: 0.2s ease all;
  pointer-events: none;
`;

const formContact = styled(Form)``;
const input = styled(Field)`
  width: inherit;
  padding: 16px 8px;
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--white-color);
  height: 57px;

  & :focus-within ~ ${placeholder}, :not(:placeholder-shown) ~ ${placeholder} {
    top: -26px;
  }

  &:focus {
    outline: none;
  }

  ::placeholder {
    opacity: 0;
  }
`;

const label = styled.label`
  color: var(--gray-color);
  font-family: inherit;
  display: block;
  width: 100%;
  margin-bottom: 52px;
  position: relative;
`;

const errorMessge = styled.div`
  position: absolute;
  left: 0;
  bottom: -24px;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
  font-size: 14px;
  color: red;
  font-style: italic;

  &:before {
    content: "";
    scale: 1.1;
    width: 16px;
    height: 15px;
    display: inline-block;
    background-image: url(${errorImg});
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 16px;
  }
`;
export default { formBox, errorMessge, label, input, formContact, placeholder };
