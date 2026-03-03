import { useDispatch, useSelector } from "react-redux";
import { changeContent } from "../redux/content/contentSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.products.cartItems);
    const favItems = useSelector(state => state.products.favItems);
    const totalPrice = useSelector(state => state.products.totalPrice);
    return (
        <div className="fixed top-0 left-0 w-full bg-[#f7f7f7]">
            <div className="flex justify-between pt-4 pr-8 pb-4 pl-8">
                <div className="flex items-center gap-8">
                    <h1>Mini E-commerce</h1>
                    <button onClick={()=>{dispatch(changeContent("shop"))}}>Shop</button>
                </div>
                <div className="flex items-center gap-4">
                    <h3><b>Rs {totalPrice}</b></h3>
                    <button onClick={()=>{dispatch(changeContent("cart"))}}>Cart&nbsp;&nbsp;<sub><b>{cartItems.length}</b></sub></button>
                    <button onClick={()=>{dispatch(changeContent("fav"))}}>Fav&nbsp;&nbsp;<sub><b>{favItems.length}</b></sub></button>
                    <button>Theme</button>
                </div>
            </div>
        </div>
    )
}
