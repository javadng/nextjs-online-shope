import ProductItem from "./ProductItem";

import GridList from "../UI/GridList";
import React, { useEffect, useState } from "react";

import classes from "./ProductLists.module.scss";
import useFilter from "../../hooks/use-filter";
import FilterItems from "../filter/FilterItems";
import Pagination from "../pagination/Pagination";
import LoadingSpinner from "../UI/spinners/LoadingSpinner";
import ErrorMessage from "../UI/ErrorMessage";

const ProductList = props => {
  const [priceLimit, setPriceLimit] = useState(500);
  const [filterState, filterFunHandler] = useFilter();
  const [productsShown, setProductShown] = useState([]);

  let productContent;
  let minPrice = 0;
  let maxPrice = 0;

  useEffect(() => {
    filterFunHandler(productsShown, priceLimit);
  }, [filterFunHandler, priceLimit, productsShown]);

  if (props.notification?.status === "ERROR") {
    productContent = <ErrorMessage content={props.notification.message} />;
  }

  if (props.products && props.products.length > 0) {
    minPrice = filterState.minPrices;
    maxPrice = +filterState.maxPrices + 10;

    productContent = filterState.filterdItems?.map(product => (
      <ProductItem
        key={product.id}
        img={product.imgUrl}
        id={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
      />
    ));
  }

  return (
    <section className={classes.producSection}>
      <FilterItems
        setValue={setPriceLimit}
        min={minPrice}
        max={maxPrice || ""}
      />
      <GridList className={classes.gridlist}>
        {props.notification?.status === "LOADING" && <LoadingSpinner />}
        {productContent}
        <Pagination
          setPostsState={setProductShown}
          currentPage={1}
          postPerPage={6}
          allPosts={props.products}
          className={classes.pagination}
        />
      </GridList>
      ;
    </section>
  );
};

export default ProductList;
