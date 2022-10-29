const getBlogsList = async () => {
  const response = await fetch(`${process.env.apiUrl}/BlogLists.json`);

  if (!response.ok)
    throw new Error(`Somthing went wrong. ${response.statusText}`);

  const dataFetch = await response.json();

  return dataFetch;
};

export default getBlogsList;
