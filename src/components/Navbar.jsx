import { useDispatch, useSelector } from "react-redux";
import { changeContent } from "../redux/content/contentSlice";
import { changeTheme } from "../redux/theme/themeSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.products.cartItems);
    const favItems = useSelector(state => state.products.favItems);
    const totalPrice = useSelector(state => state.products.totalPrice);
    const themeChoice = useSelector(state => state.theme.themeChoice);
    return (
        <div className="fixed top-0 left-0 w-full">
            <div className="flex justify-between pt-4 pr-8 pb-4 pl-8">
                <div className="flex items-center gap-8">
                    <h1><b>Mini E-commerce</b></h1>
                    <h3 className="opacity-70 cursor-pointer hover:opacity-100 mt-1" onClick={()=>{dispatch(changeContent("shop"))}}>Shop</h3>
                </div>
                <div className="flex items-center gap-4">
                    <h3><b>Rs {totalPrice}</b></h3>
                    <button onClick={()=>{dispatch(changeContent("cart"))}}>Cart&nbsp;&nbsp;<sub><b>{cartItems.length}</b></sub></button>
                    <button onClick={()=>{dispatch(changeContent("fav"))}}>Fav&nbsp;&nbsp;<sub><b>{favItems.length}</b></sub></button>
                    <button onClick={()=>{dispatch(changeTheme())}}>Change to {themeChoice==="light"?"Dark":"Light"} Theme</button>
                </div>
            </div>
        </div>
    )
}
