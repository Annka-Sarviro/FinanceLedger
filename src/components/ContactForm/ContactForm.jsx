import { nanoid } from "nanoid";
import { Formik } from "formik";
import validationSchema from "../../schemas/contactFormschema";
import { ButtonColor } from "../Button/Button.styled";
import s from "./ContactForm.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const initialValues = {
  name: "",
  email: "",
};

const ContactForm = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();

  const handleSubmit = async (values, { resetForm }) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => resetForm())
      .then(() =>
        toast.success("Thank You! Your form submission has been received", {
          position: toast.POSITION.TOP_CENTER,
          onClose: () => window.scrollTo(0, 0),
        })
      )
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
                placeholder="Enter your name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              <s.placeholder>Enter your name</s.placeholder>
              {touched.name && errors.name && (
                <s.errorMessge>{errors.name}</s.errorMessge>
              )}
            </s.label>
            <s.label htmlFor={emailInputId}>
              <s.input
                type="email"
                name="email"
                id={emailInputId}
                title="Email"
                placeholder="Enter email*"
              />
              <s.placeholder>Enter email*</s.placeholder>
              {touched.email && errors.email && (
                <s.errorMessge>{errors.email}</s.errorMessge>
              )}
            </s.label>
            <ButtonColor variant="contained" type="submit">
              Send
            </ButtonColor>
            <ToastContainer />
          </s.formContact>
        )}
      </Formik>
    </s.formBox>
  );
};

export default ContactForm;
