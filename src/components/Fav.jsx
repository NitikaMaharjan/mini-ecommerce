import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromFav } from "../redux/products/productsSlice";

export default function Fav() {
  const dispatch = useDispatch();
  const favItems = useSelector(state => state.products.favItems); 
  return (
    <div className="content">
      <h1 className="mb-4">Fav</h1>
      <div className="grid grid-cols-5 gap-6">
        {
          favItems.map((item, id)=>{
            return <div key={id} className="product-item">
              <img src={item.url} style={{height: "140px", width: "140px"}}/>
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
              <div className="flex justify-between mt-4">
                <button className="button" onClick={()=>{dispatch(removeFromFav(item.id))}}>Remove from Fav</button>
                <button className="button" onClick={()=>{dispatch(addToCart({id: item.id, url: item.url, name: item.name, price: item.price}))}}>Add to Cart</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
