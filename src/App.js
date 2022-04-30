import "./App.css";
import "../node_modules/flowbite/dist/flowbite.js";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Signin from "./Pages/Signin/Signin";
import Banner from "./Pages/Home/Banner/Banner";

function App() {
  return (
    <>
      <Navbar />
      {/* <Signin /> */}
      {/* <Login /> */}
      <Banner />
      <Footer />
    </>
  );
}

export default App;
