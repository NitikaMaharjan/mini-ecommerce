import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Fav from "./components/Fav";

export default function App() {
  return (
    <>
      <Navbar/>
      <Products/>
      <Cart/>
      <Fav/>
    </>
  )
}
