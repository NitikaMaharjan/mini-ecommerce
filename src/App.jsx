import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Fav from "./components/Fav";

export default function App() {
  const contentChoice = useSelector(state => state.content.contentChoice);
  return (
    <>
      <Navbar/>
      {
        contentChoice==="shop" &&
        <Products/>
      }
      {
        contentChoice==="cart" &&
        <Cart/>
      }
      {
        contentChoice==="fav" &&
        <Fav/>
      }
    </>
  )
}
