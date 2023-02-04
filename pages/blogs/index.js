import BlogList from "../../components/blog/blogPage/BlogList";
import SideBar from "../../components/blog/blogPage/SideBar";
import ErrorMessage from "../../components/UI/ErrorMessage";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";

const BolgPage = props => {
  if (props.error) {
    return <ErrorMessage message={props.error} />;
  }

  if (!props.error && props.content) {
    return (
      <div className="blogs-page">
        <SideBar className="sidebar" />
        <BlogList blogs={props.content} />
      </div>
    );
  }
};

export default BolgPage;

export async function getStaticProps() {
  let data, errorMessage;

  try {
    const GET_BLOGS = gql`
      query GET_BLOGS {
        posts {
          nodes {
            content
            date
            id
            uri
            title
          }
        }
      }
    `;

    const result = await client.query({ query: GET_BLOGS });
    if (!result?.data?.posts) throw new Error("No data.");

    data = result.data.posts.nodes;
  } catch (error) {
    errorMessage = error.message || "Error with getting data💥💥.";
  }

  return {
    props: {
      content: data || null,
      error: errorMessage || null,
    },
    revalidate: 3600,
  };
}
