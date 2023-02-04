import { useCallback, useState } from "react";

const initialState = {
  filterdItems: [],
  prices: [],
};
const useFilter = () => {
  const [filterdItems, setfilterdItems] = useState(initialState);

  const filterItemsHandler = useCallback(
    (allItems, filterPrice) => {
      setfilterdItems({
        filterdItems: allItems.filter(
          item => +item.price.replace("$", "") <= filterPrice
        ),
        maxPrices: Math.max(...allItems.map(p => p.price.replace("$", ""))),
        minPrices: Math.min(...allItems.map(p => p.price.replace("$", ""))),
      });
    },
    [setfilterdItems]
  );

  return [filterdItems, filterItemsHandler];
};

export default useFilter;
