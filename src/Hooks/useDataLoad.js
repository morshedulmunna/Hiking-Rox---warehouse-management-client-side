import axios from "axios";
import { useEffect, useState } from "react";

const useDataload = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:4000/products`);
      setProducts(data);
    })();
  }, []);
  return [products, setProducts];
};

export default useDataload;
