import "./App.css";
import "../node_modules/flowbite/dist/flowbite.js";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./Pages";
import { Navbar, Footer } from "./Shared";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
