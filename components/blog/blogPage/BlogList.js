import BlogItem from "./BlogItem";

import classes from "./blogList.module.scss";
import Pagination from "../../pagination/Pagination";
import { Fragment, useEffect, useState } from "react";

const BlogList = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [posts]);

  let pageContent = (
    <Fragment>
      {posts.map((item, index) => (
        <BlogItem
          content={item.content}
          uri={item.uri}
          title={item.title}
          date={item.date}
          id={item.id}
          key={item.id}
        />
      ))}
      <Pagination
        setPostsState={setPosts}
        currentPage={1}
        postPerPage={3}
        allPosts={props.blogs}
      />
    </Fragment>
  );

  return <ul className={classes.list}>{pageContent}</ul>;
};

export default BlogList;
