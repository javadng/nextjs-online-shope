const filterProducts = (products, priceFilter) => {
  const filteredItems = products.filter(item => item.price <= priceFilter);
  
  return filteredItems;
};

export default filterProducts;
