import s from "./Blog.styled";
import img from "../../assets/home/blog.jpg";
import {
  SectionTitle,
  SectionSubtitle,
  SectionText,
} from "../Layout/Layout.styled";

const Blog = () => {
  return (
    <s.blogBox>
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
      <s.blogImg src={img} width="670" />
    </s.blogBox>
  );
};

export default Blog;
