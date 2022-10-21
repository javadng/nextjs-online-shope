import BlogList from "../../components/blog/blogPage/BlogList";
import SideBar from "../../components/blog/blogPage/SideBar";
import ErrorMessage from "../../components/UI/ErrorMessage";
import getBlogsList from "../../lib/getBlogsList";

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
  let propsContent, errorMessage;

  try {
    const blogData = await getBlogsList();

    propsContent = blogData;
  } catch (error) {
    errorMessage = error.message || "Error with getting data💥💥.";
  }

  return {
    props: {
      content: propsContent || null,
      error: errorMessage || null,
    },
    revalidate: 3600,
  };
}
