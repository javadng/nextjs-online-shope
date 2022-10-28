import SideBar from "../../components/blog/blogPage/SideBar";

import classes from "../../styles/SingleBlog.module.scss";
import SocialIcons from "../../components/UI/SocialIcons";

import { AiFillTags } from "react-icons/ai";
import { Fragment } from "react";

const DUMMY__BLOG = {
  id: "b1",
  title: "Choose a CMS and set up your blog.",
  blogText:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  image: "/images/blog-1.jpg",
};

const SingleBlog = props => {
  return (
    <Fragment>
      <SideBar />
      <div className={classes.singleblog}>
        <figure className={classes.blogImg}>
          <img alt="" src={DUMMY__BLOG.image} />
        </figure>
        <h1 className={classes.title}>{DUMMY__BLOG.title}</h1>
        <article className={classes.blogtext}>
          <p>{DUMMY__BLOG.blogText}</p>
        </article>
        <SocialIcons />
        <footer>
          <div className={classes.relatedTags}>
            <AiFillTags />
            <a href="/home">LG</a>
            <a href="/home">Android</a>
            <a href="/home">Mobile</a>
            <a href="/home">Laptop</a>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default SingleBlog;
