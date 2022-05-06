import "./App.css";
import { Toaster } from "react-hot-toast";
import "../node_modules/flowbite/dist/flowbite.js";
import { Routes, Route } from "react-router-dom";
import {
  About,
  AddProduct,
  Blog,
  Error404,
  Home,
  Inventory,
  ItemDetails,
  Login,
  MyItem,
  Signup,
} from "./Pages";
import { Navbar, Footer } from "./Shared";
import RequireAuth from "./RouterDOM/RequireAuth";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/about" element={<About />} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/item"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        />
        <Route
          path="/add-product"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <ItemDetails />
            </RequireAuth>
          }
        />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
