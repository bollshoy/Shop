import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useProducts = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  const apiUrl = import.meta.env.VITE_FAKE_STORE_API;
  const [fetching, setFetching] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 5;
  const [limit, setLimit] = useState(pageSize);

  const getProducts = useCallback(
    async (nextLimit) => {
      setError(false);
      setFetching(true);
      try {
        const response = await axios.get(apiUrl, {
          params: { limit: nextLimit },
        });
        setProduct(response.data);
        setHasMore(response.data.length === nextLimit);
      } catch (error) {
        setError(true);
        console.log("Error: ", error);
      } finally {
        setFetching(false);
      }
    },
    [apiUrl],
  );

  useEffect(() => {
    getProducts(limit);
  }, [getProducts, limit]);

  const loadMore = () => {
    if (!fetching && hasMore) {
      setLimit((previousLimit) => previousLimit + pageSize);
    }
  };

  return { product, error, fetching, hasMore, loadMore };
};

export default useProducts;
