import react from "react"
import Product from "./Product"
import './products.css'
import { useEffect } from "react"
const Products = ({productItems,setProductItems,cardItems, setCardItems}) =>{
    console.log("Product items")
    console.log(productItems)
    return(
      <div className="products">
        {productItems.map((product) => (
          <Product key={product.id} product={product} cardItems={cardItems} setCardItems={setCardItems} productItems= { productItems} setProductItems={setProductItems}/>
        ))}
      </div>
    )
}

export default Products