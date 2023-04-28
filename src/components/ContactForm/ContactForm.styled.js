import styled from "styled-components";
import { Form, Field } from "formik";

const formBox = styled.div`
  position: relative;
`;
const formContact = styled(Form)``;

const label = styled.label`
  color: var(--gray-color);
  font-family: inherit;
  display: block;
  width: 100%;
  margin-bottom: 16px;
`;

const input = styled(Field)`
  width: inherit;
  padding: 16px 8px;
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--white-color);
  &:focus {
    outline: none;
  }
`;

export default { formBox, label, input, formContact };
