import { API_URL } from "../config/config";

const getProductList = async () => {
  const response = await fetch(`${API_URL}/products.json`);

  if (!response.ok)
    throw new Error(`Somthing went wrong. ${response.statusText}`);

  const dataFetch = await response.json();

  let data = [];

  for (const item in dataFetch) {
    data.push({
      id: item,
      name: dataFetch[item].name,
      price: dataFetch[item].price,
      description: dataFetch[item].description,
      imgUrl: dataFetch[item].image_url,
    });
  }

  return data;
};

export default getProductList;
