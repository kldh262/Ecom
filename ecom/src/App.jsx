import React from "react";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Details from "./routes/Details";
import About from "./routes/About";
import Login from "./routes/Login";
import Cart from "./routes/Cart";
import Profile from "./routes/Profile";
import Footer from "./components/Footer";
import Product from "./routes/Product";
import { Route, Routes } from "react-router-dom";
import Signup from "./routes/Signup";
import { useState, useEffect } from "react";
import { SearchDetailsProvider } from "./context/searchDetails";

function App() {
  const [search, setSearch] = useState("");
  const[isLogin,setIsLogin]=useState(false);
  return (
    <div>
      <SearchDetailsProvider search={search} setSearch={setSearch}>
        <Navbar />
        <div className="flex-1 min-h-screen">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<Details />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/details" element={<Details />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </div>
        </div>
      </SearchDetailsProvider>
      <Footer />
    </div>
  );
}

export default App;