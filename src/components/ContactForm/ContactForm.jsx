import { nanoid } from "nanoid";

import { Formik, ErrorMessage } from "formik";

import { ButtonColor } from "../Button/Button.styled";
import s from "./ContactForm.styled";
// import { useState } from "react";

const FormError = (name) => {
  return (
    <ErrorMessage
      name={name}
      render={() => <p>Enter valid number or name</p>}
    />
  );
};

const initialValues = {
  name: "",
  email: "",
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();

  const handleSubmit = async (values) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  return (
    <s.formBox>
      <Formik
        name="contact"
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <s.formContact name="contact">
          <s.label htmlFor={nameInputId}>
            <s.input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter your name"
            />
            <FormError name="name" />
          </s.label>
          <s.label htmlFor={emailInputId}>
            <s.input
              type="email"
              name="email"
              id={emailInputId}
              title="Email"
              placeholder="Enter email*"
              required
            />
            <FormError name="email" />
          </s.label>

          <ButtonColor variant="contained" type="submit">
            Send
          </ButtonColor>
        </s.formContact>
      </Formik>
    </s.formBox>
  );
};

export default ContactForm;
