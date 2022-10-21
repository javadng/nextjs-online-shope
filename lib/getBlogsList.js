import { API_URL } from "../config/config";

const getBlogsList = async () => {
  const response = await fetch(`${API_URL}/BlogLists.json`);

  if (!response.ok)
    throw new Error(`Somthing went wrong. ${response.statusText}`);

  const dataFetch = await response.json();

  return dataFetch;
};

export default getBlogsList;
