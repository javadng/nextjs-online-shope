const getProductList = async () => {
  const response = await fetch(`${process.env.apiUrl}/products.json`);
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
