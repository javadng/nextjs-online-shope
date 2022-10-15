import Main from '../../Layouts/Main';
import ContainerGrid from '../../UI/ContainerGrid';
import Banner from '../../Layouts/Header/Banner';

import classes from './BlogLayout.module.scss';
import { useEffect } from 'react';

const BlogLayout = props => {
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, []);
  
  return (
    <Main>
      <Banner
        subTitle="Blog Posts"
        title="Some Post"
        desc="Responsive React.js WebApp"
      />
      <ContainerGrid className={classes.blogs}>{props.children}</ContainerGrid>
    </Main>
  );
};

export default BlogLayout;
