import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../redux/products/productsSlice";

export default function Fav() {
  const dispatch = useDispatch();
  const favItems = useSelector(state => state.products.favItems); 
  return (
    <div className="content">
      <h1 className="mb-4">Fav</h1>
      <div className="grid grid-cols-6 gap-8">
        {
          favItems.map((item, id)=>{
            return <div key={id} className="product-item">
              <img src={item.url} style={{height: "140px", width: "140px"}}/>
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
              <div className="flex justify-between mt-4">
                <button className="button" onClick={()=>{dispatch(removeFromFav(item.id))}}>No Fav</button>
                <button className="button">Add to Cart</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
