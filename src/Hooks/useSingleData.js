const { default: axios } = require("axios");
const { useState, useEffect } = require("react");
const { useParams } = require("react-router-dom");

const useSingleData = () => {
  let { id } = useParams();

  const [singleProducts, setSingleProducts] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:4000/product/${id}`);
      setSingleProducts(data);
    })();
  }, [id]);
  return [singleProducts, setSingleProducts];
};

export default useSingleData;
