import axios from "axios";
import { useEffect, useState } from "react";

const useDataload = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://evening-escarpment-14046.herokuapp.com/products`
      );
      setProducts(data);
    })();
  }, []);
  return [products, setProducts];
};

export default useDataload;
