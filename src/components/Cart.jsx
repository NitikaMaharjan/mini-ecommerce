import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromCart, clearCart } from "../redux/products/productsSlice";

export default function Fav() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.products.cartItems); 
  return (
    <div className="content">
      <h1 className="mb-4">Cart</h1>
      {
        cartItems.length!==0 &&
        <button className="mb-4" onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
      }
      <div className="grid grid-cols-5 gap-6">
        {
          cartItems.map((item, id)=>{
            return <div key={id} className="product-item">
              <img src={item.url} style={{height: "140px", width: "140px"}}/>
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
              <div className="flex justify-between mt-4">
                <button className="button" onClick={()=>{dispatch(addToFav({id: item.id, url: item.url, name: item.name, price: item.price}))}}>Fav</button>
                <button className="button" onClick={()=>{dispatch(removeFromCart(item.id))}}>Remove from cart</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
