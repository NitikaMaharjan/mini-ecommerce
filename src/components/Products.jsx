import { useSelector } from "react-redux";

export default function Products() {
  const items = useSelector(state => state.products.items); 
  return (
    <div className="content">
      <h1 className="mb-4">Products</h1>
      <div className="grid grid-cols-6 gap-8">
        {
          items.map((item, id)=>{
            return <div id={id} className="product-item">
              <img src={item.url} style={{height: "140px", width: "140px"}}/>
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
              <div className="flex justify-between">
                <button className="button">Fav</button>
                <button className="button">Add to Cart</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
