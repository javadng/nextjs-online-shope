export const getSingleProduct = async productId => {
  const response = await fetch(`${process.env.apiUrl}/singlProducts.json`);

  if (!response.ok)
    throw new Error(`Somthing went wrong. ${response.statusText}`);

  let dataFetch = await response.json();

  return dataFetch[productId];
};
