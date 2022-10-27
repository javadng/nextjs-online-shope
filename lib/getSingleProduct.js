import { API_URL } from "../config/config";

export const getSingleProduct = async productId => {
  const response = await fetch(`${API_URL}/singlProducts.json`);

  if (!response.ok)
    throw new Error(`Somthing went wrong. ${response.statusText}`);

  let dataFetch = await response.json();

  return dataFetch[productId];
};
