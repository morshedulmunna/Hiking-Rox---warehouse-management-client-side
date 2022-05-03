import "./App.css";
import { Toaster } from "react-hot-toast";
import "../node_modules/flowbite/dist/flowbite.js";
import { Routes, Route } from "react-router-dom";
import { Home, Inventory, Login, MyItem, Signup } from "./Pages";
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
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
