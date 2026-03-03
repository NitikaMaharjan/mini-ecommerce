import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Fav from "./components/Fav";

export default function App() {
  const contentChoice = useSelector(state => state.content.contentChoice);
  return (
    <>
      <Navbar/>
      {
        contentChoice==="shop" &&
        <Shop/>
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
