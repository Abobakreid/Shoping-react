import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./Components/index.jsx";
import { Cart, Favorite, Home, Shop } from "./Pages/index.jsx";
import "./Pages/index.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/favorite"} element={<Favorite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
