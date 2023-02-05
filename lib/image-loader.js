const imageLoader = ({ src, width }) => {
  // return src;
  return `${src}?w=${width}`;
};
export default imageLoader;
