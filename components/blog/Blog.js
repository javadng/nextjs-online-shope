import Container from '../UI/Container';
import SectionTitle from '../UI/SectionTitle';
import BlogList from './BlogList';

const Blog = props => {
  return (
    <Container>
      <SectionTitle title="Our Blog" subtitle="latest news from blog" />
      <BlogList />
    </Container>
  );
};

export default Blog;
