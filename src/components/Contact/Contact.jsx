import s from "./Contact.styled";
import img from "../../assets/home/contact.jpg";
import ContactForm from "../ContactForm/ContactForm";
import { SectionTitleColor } from "../Layout/Layout.styled";
const Contact = () => {
  return (
    <s.contactBox>
      <s.contactImg src={img} width="670" />
      <s.container>
        <SectionTitleColor>Request Callback</SectionTitleColor>
        <ContactForm />
      </s.container>
    </s.contactBox>
  );
};

export default Contact;
