const postsSlicer = (allPosts, currentPage, postPerPage) => {
  const startIndex = currentPage * postPerPage - postPerPage;
  const endIndex = startIndex + postPerPage;

  return allPosts.slice(startIndex, endIndex);
};

export default postsSlicer;
