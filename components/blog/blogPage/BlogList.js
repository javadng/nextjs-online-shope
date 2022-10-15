import BlogItem from './BlogItem';

import classes from './blogList.module.scss';
import Pagination from '../../pagination/Pagination';
import { Fragment, useEffect, useState } from 'react';
import useHttp from '../../../hooks/use-http';
import { getBlogsList } from '../../../lib/getBlogsList';

import LoadingSpinner from '../../UI/spinners/LoadingSpinner';
import ErrorMessage from '../../UI/ErrorMessage';

const BlogList = props => {
  const [posts, setPosts] = useState([]);
  const [sendRequest, httpState] = useHttp(getBlogsList);

  let pageContent;

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [posts]);

  if (httpState.status === 'LOADING') {
    pageContent = <LoadingSpinner />;
  }

  if (httpState.status === 'ERROR') {
    pageContent = <ErrorMessage content={httpState.error} />;
  }

  if (httpState.status === 'SUCCESS') {
    pageContent = (
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
          allPosts={httpState.data}
        />
      </Fragment>
    );
  }

  return <ul className={classes.list}>{pageContent}</ul>;
};

export default BlogList;
