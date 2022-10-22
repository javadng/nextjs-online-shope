import { useState } from "react";
import Pagination from "../pagination/Pagination";
import GridList from "../UI/GridList";
import BlogItem from "./BlogItem";
import classes from "./BlogList.module.scss";

const BlogList = props => {
  const { homeBlog } = props;
  const [blogsHomeState, setBlogsHome] = useState(homeBlog);

  return (
    <GridList>
      {blogsHomeState.map(item => (
        <BlogItem
          key={item.id}
          id={item.id}
          date={item.date}
          title={item.title}
          year={item.year}
          categories={item.categories}
        />
      ))}
      <Pagination
        className={classes.PaginationBtn}
        setPostsState={setBlogsHome}
        allPosts={homeBlog}
        currentPage={1}
        postPerPage={4}
      />
    </GridList>
  );
};
export default BlogList;
