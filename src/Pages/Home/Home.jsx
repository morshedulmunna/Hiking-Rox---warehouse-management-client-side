import Banner from "./Banner/Banner";
import Product from "./Product/Product";
import useDataload from "../../Hooks/useDataLoad";

const Home = () => {
  const [products, setProducts] = useDataload([]);
  console.log(products);

  return (
    <>
      <Banner />
      <div className="lg:container md:container sm:container mx-auto">
        <h1 className="mt-12 ml-4 lg:ml-0 text-4xl font-bold">
          Latest Product
        </h1>
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
          {products.slice(1, 4).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
