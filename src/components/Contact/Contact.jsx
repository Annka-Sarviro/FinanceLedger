import s from "./Contact.styled";
import img from "../../assets/home/contact.jpg";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <s.contactBox>
      <s.contactImg src={img} width="670" />
      <s.container>
        <s.contactSectionTitle>Request Callback</s.contactSectionTitle>
        <ContactForm />
      </s.container>
    </s.contactBox>
  );
};

export default Contact;
