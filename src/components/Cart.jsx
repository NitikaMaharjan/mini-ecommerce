import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromCart, clearCart } from "../redux/products/productsSlice";
import { showNotification } from "../redux/notification/notificationSlice";

export default function Fav() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.products.cartItems); 
  return (
    <div className="content">
      <h1 className="mb-4 text-center">Cart</h1>
      <div className="flex justify-end">
        {
          cartItems.length!==0 &&
          <button className="mb-4" onClick={()=>{dispatch(clearCart()); dispatch(showNotification("Cleared cart successfully!"));}}>Clear Cart</button>
        }
      </div>
      <div className="grid grid-cols-5 gap-6">
        {
          cartItems.map((item, id)=>{
            return <div key={id} className="product-item">
              <div className="w-full flex justify-center">
                <img src={item.url} style={{height: "140px", width: "140px"}}/>
              </div>
              <h3><b>{item.name}</b></h3>
              <p>Rs {item.price}</p>
              <div className="flex justify-between mt-4">
                <button onClick={()=>{dispatch(addToFav({id: item.id, url: item.url, name: item.name, price: item.price})); dispatch(showNotification("Added product to fav successfully!"));}}>Fav</button>
                <button onClick={()=>{dispatch(removeFromCart({id: item.id, price: item.price})); dispatch(showNotification("Removed product from cart successfully!"));}}>Remove from cart</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
