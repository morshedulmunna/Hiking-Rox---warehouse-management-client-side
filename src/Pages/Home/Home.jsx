import Banner from "./Banner/Banner";
import Product from "./Product/Product";
import useDataload from "../../Hooks/useDataLoad";
import { useEffect, useState } from "react";
import Loader from "../../RouterDOM/Loader";

const Home = () => {
  const [products] = useDataload([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(products).length > 0) {
      setLoading(false);
    }
  }, [products]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Banner />
      <div className="lg:container md:container sm:container mx-auto">
        <h1 className="mt-12 ml-4 lg:ml-0 text-4xl font-bold">
          Latest Product
        </h1>
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 place-items-center">
          {products.slice(1, 7).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
