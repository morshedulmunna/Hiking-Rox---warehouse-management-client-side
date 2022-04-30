import "./App.css";
import "../node_modules/flowbite/dist/flowbite.js";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
