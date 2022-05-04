const { default: axios } = require("axios");
const { useState, useEffect } = require("react");
const { useParams } = require("react-router-dom");

const useSingleData = () => {
  let { id } = useParams();

  const [singleProducts, setSingleProducts] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://evening-escarpment-14046.herokuapp.com/products/${id}`
      );
      setSingleProducts(data);
    })();
  }, [id]);
  return [singleProducts, setSingleProducts];
};

export default useSingleData;
