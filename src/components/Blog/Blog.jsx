import s from "./Blog.styled";
import img_1x from "../../assets/home/blog.jpg";
import img_2x from "../../assets/home/blog@2x.jpg";
import img_webp_1x from "../../assets/home/blog.webp";
import img_webp_2x from "../../assets/home/blog@2x.webp";
import {
  SectionTitle,
  SectionSubtitle,
  SectionText,
} from "../Layout/Layout.styled";

const Blog = () => {
  return (
    <s.blogBox id="blog">
      <s.container>
        <SectionSubtitle>April 16 2020</SectionSubtitle>
        <SectionTitle>Blog Post One</SectionTitle>
        <SectionText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </SectionText>
        <s.buttonWhiteBlue>Read More</s.buttonWhiteBlue>
      </s.container>

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
        <s.blogImg src={img_1x} alt="our command fotoa" width="670" />
      </picture>
    </s.blogBox>
  );
};

export default Blog;
