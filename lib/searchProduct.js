import getProductList from "./getProducts";

const searchProduct = async productName => {
  const firstLetters = productName.toLowerCase().slice(0, 4);

  const allProducts = await getProductList();

  const filteredProducts = allProducts.filter(productItem =>
    productItem.name.toLowerCase().includes(firstLetters)
  );

  return filteredProducts;
};

export default searchProduct;
