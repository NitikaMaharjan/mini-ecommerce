import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../redux/products/productsSlice";

export default function Shop() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.products.items); 
  return (
    <div className="content">
      <h1 className="mb-4">Shop</h1>
      <div className="grid grid-cols-6 gap-8">
        {
          items.map((item, id)=>{
            return <div key={id} className="product-item">
              <img src={item.url} style={{height: "140px", width: "140px"}}/>
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
              <div className="flex justify-between mt-4">
                <button className="button" onClick={()=>{dispatch(addToFav({id: item.id, url: item.url, name: item.name, price: item.price}))}}>Fav</button>
                <button className="button">Add to Cart</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
