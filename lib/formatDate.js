const formatDate = (date, options) => {
  const postDate = new Date(date);
  const formatedDate = new Intl.DateTimeFormat("en-US", options).format(
    postDate
  );

  return formatedDate;
};
export default formatDate;
