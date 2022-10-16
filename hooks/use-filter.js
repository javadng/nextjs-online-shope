import { useCallback, useState } from 'react';

const initialState = {
  filterdItems: [],
  prices: [],
};
const useFilter = () => {
  const [filterdItems, setfilterdItems] = useState(initialState);

  const filterItemsHandler = useCallback(
    (allItems, filterPrice) => {
      setfilterdItems({
        filterdItems: allItems.filter(item => item.price <= filterPrice),
        maxPrices: Math.max(...allItems.map(p => p.price)),
        minPrices: Math.min(...allItems.map(p => p.price)),
      });
    },
    [setfilterdItems]
  );

  return [filterdItems, filterItemsHandler];
};

export default useFilter;
