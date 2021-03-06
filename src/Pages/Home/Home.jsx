import Banner from "./Banner/Banner";
import Product from "./Product/Product";
import useDataload from "../../Hooks/useDataLoad";
import { useEffect, useState } from "react";
import Loader from "../../RouterDOM/Loader";
import NewsLatter from "./NewsLatter/NewsLatter";
import RecentBlog from "./RecentBlog/RecentBlog";
import axios from "axios";

const Home = () => {
  const [products] = useDataload([]);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://evening-escarpment-14046.herokuapp.com/blogs`
      );
      setBlogs(data);
    })();
  }, []);

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
      <div className="lg:container md:container sm:container mx-auto ">
        <h1 className="mt-12 ml-4 lg:ml-0 text-4xl font-bold">
          Latest Product
        </h1>
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 place-items-center">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <h1 className="text-center mt-12 text-3xl font-bold ">Recent Blog</h1>
        <div className="flex justify-center items-center flex-col lg:flex-row flex-wrap ">
          {blogs.map((blog) => (
            <RecentBlog key={blog._id} blog={blog} />
          ))}
        </div>
        <NewsLatter />
      </div>
    </>
  );
};

export default Home;
