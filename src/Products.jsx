import react from "react"
import Product from "./Product"
import './products.css'
const Products = ({productItems,cardItems, setCardItems}) =>{
    return(
      <div className="products">
        {productItems.map((product) => (
          <Product key={product.id} product={product} cardItems={cardItems} setCardItems={setCardItems} />
        ))}
      </div>
    )
}

export default Products