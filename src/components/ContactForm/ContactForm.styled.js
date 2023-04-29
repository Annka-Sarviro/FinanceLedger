import styled from "styled-components";
import { Form, Field } from "formik";

const formBox = styled.div`
  position: relative;
`;
const formContact = styled(Form)``;
const input = styled(Field)`
  width: inherit;
  padding: 16px 8px;
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--white-color);
  position: relative;
  height: 57px;

  &:focus {
    outline: none;
  }
`;
const label = styled.label`
  color: var(--gray-color);
  font-family: inherit;
  display: block;
  width: 100%;
  margin-bottom: 24px;

  & > span {
    position: absolute;
    left: 0;
    display: inline-block;
    padding: 16px 8px;
    pointer-events: none;
    transition: 0.5s;
  }

  & input:focus + span,
  & input:invalid + span,
  & input:valid + span {
    transform: translateY(-42px);
  }
`;

export default { formBox, label, input, formContact };
