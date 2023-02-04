import SideBar from "../../components/blog/blogPage/SideBar";
import classes from "../../styles/SingleBlog.module.scss";
import SocialIcons from "../../components/UI/SocialIcons";
import { AiFillTags } from "react-icons/ai";
import { Fragment } from "react";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import parseHtml from "html-react-parser";

const SingleBlog = props => {
  if (!props.data) return console.log("error");

  const { data } = props;
  const content = parseHtml(data.content);

  const figure = content.find(item => item.type === "figure");
  const imageElem = figure.props.children;
  const paragraph = content.find(item => item.type === "p");

  return (
    <Fragment>
      <SideBar />
      <div className={classes.singleblog}>
        <figure className={classes.blogImg}>{imageElem}</figure>
        <h1 className={classes.title}>{props.data.title}</h1>
        <article className={classes.blogtext}>{paragraph}</article>
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
export async function getStaticProps(context) {
  const { slug } = context.params;

  const GET_SINGLE_POST = gql`
    query GET_SINGLE_POST($id: ID!) {
      post(id: $id, idType: SLUG) {
        content
        date
        id
        title
      }
    }
  `;

  const result = await client.query({
    query: GET_SINGLE_POST,
    variables: { id: slug },
  });

  const data = result.data.post;
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths(context) {
  const GET_BLOGS_URI = gql`
    query GET_BLOGS_URI {
      posts {
        nodes {
          id
          uri
        }
      }
    }
  `;

  const result = await client.query({ query: GET_BLOGS_URI });

  const paths = result.data.posts.nodes.map(item => ({
    params: { slug: item.uri },
  }));

  return {
    paths,
    fallback: true,
  };
}
