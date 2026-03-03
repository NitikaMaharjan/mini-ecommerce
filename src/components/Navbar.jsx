import { useDispatch } from "react-redux";
import { changeContent } from "../redux/content/contentSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    return (
        <div className="flex justify-between pt-4 pr-8 pb-4 pl-8">
            <div className="flex items-center gap-8">
                <h1>Mini E-commerce</h1>
                <button onClick={()=>{dispatch(changeContent("shop"))}}>Shop</button>
            </div>
            <div className="flex gap-4">
                <button onClick={()=>{dispatch(changeContent("cart"))}}>Cart</button>
                <button onClick={()=>{dispatch(changeContent("fav"))}}>Fav</button>
                <button>Theme</button>
            </div>
        </div>
    )
}
