import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Fav from "./components/Fav";
import Notification from "./components/Notification";

export default function App() {
  const contentChoice = useSelector(state => state.content.contentChoice);
  const viewNoti = useSelector(state => state.notification.viewNoti);
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
      {   
        viewNoti &&
        <Notification/>
      }
    </>
  )
}
