import { nanoid } from "nanoid";
// import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
// import { useFormik } from "formik";
import validationSchema from "../../schemas/contactFormschema";

import { ButtonColor } from "../Button/Button.styled";
import s from "./ContactForm.styled";
// import { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

// const FormError = (name) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={() => <p>Enter valid number or name</p>}
//     />
//   );
// };

const initialValues = {
  name: "",
  email: "",
};

consat ContactForm = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();

  const handleSubmit = async (values, { resetForm }) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => resetForm())
      .then(() => alert("Thank You! Your form submission has been received"))
      .catch((error) => alert(error));
  };

  return (
    <s.formBox>
      <Formik
        name="contact"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnMount
        initialTouched={{ zip: true }}
      >
        {({ errors, touched }) => (
          <s.formContact name="contact">
            <s.label htmlFor={nameInputId}>
              <s.input
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              {touched.name && errors.name && <div>{errors.name}</div>}
              <span>Enter your name</span>{" "}
            </s.label>

            <s.label htmlFor={emailInputId}>
              <s.input
                type="email"
                name="email"
                id={emailInputId}
                title="Email"
              />
              <span>Enter email*</span>
              {touched.email && errors.email && <div>{errors.email}</div>}
            </s.label>

            <ButtonColor variant="contained" type="submit">
              Send
            </ButtonColor>
          </s.formContact>
        )}
      </Formik>
    </s.formBox>
  );
};

export default ContactForm;
