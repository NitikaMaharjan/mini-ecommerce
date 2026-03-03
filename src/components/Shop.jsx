import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFav } from "../redux/products/productsSlice";
import { showNotification } from "../redux/notification/notificationSlice";

export default function Shop() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.products.items); 
  return (
    <div className="content">
      <h1 className="mb-4 text-center">Shop</h1>
      <div className="grid grid-cols-5 gap-6">
        {
          items.map((item, id)=>{
            return <div key={id} className="product-item">
              <div className="w-full flex justify-center">
                <img src={item.url} style={{height: "140px", width: "140px"}}/>
              </div>
              <h3><b>{item.name}</b></h3>
              <p>Rs {item.price}</p>
              <div className="flex justify-between mt-4">
                <button onClick={()=>{dispatch(addToFav({id: item.id, url: item.url, name: item.name, price: item.price})); dispatch(showNotification("Added product to fav successfully!"));}}>Fav</button>
                <button onClick={()=>{dispatch(addToCart({id: item.id, url: item.url, name: item.name, price: item.price})); dispatch(showNotification("Added product to cart successfully!"));}}>Add to Cart</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
