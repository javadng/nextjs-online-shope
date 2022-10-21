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
      {posts.map(item => (
        <BlogItem
          image={item.image}
          title={item.title}
          date={item.date}
          year={item.year}
          id={item.id}
          key={item.id}
          desc={item.desc}
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
