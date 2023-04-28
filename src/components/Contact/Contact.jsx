import s from "./Contact.styled";
import img_1x from "../../assets/home/contact.jpg";
import img_2x from "../../assets/home/contact@2x.jpg";
import img_webp_1x from "../../assets/home/contact.webp";
import img_webp_2x from "../../assets/home/contact@2x.webp";
import ContactForm from "../ContactForm/ContactForm";
import { SectionTitleColor } from "../Layout/Layout.styled";
const Contact = () => {
  return (
    <s.contactBox>
      <picture>
        <source
          srcSet={`${img_webp_1x} 1x, ${img_webp_2x} 2x`}
          type="image/webp"
          loading="lazy"
        />
        <source
          srcSet={`${img_1x} 1x, ${img_2x} 2x`}
          type="image/jpeg"
          loading="lazy"
        />
        <s.contactImg src={img_1x} alt="our command fotoa" width="670" />
      </picture>

      <s.container>
        <SectionTitleColor>Request Callback</SectionTitleColor>
        <ContactForm />
      </s.container>
    </s.contactBox>
  );
};

export default Contact;
