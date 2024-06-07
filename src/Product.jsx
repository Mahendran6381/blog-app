import react from 'react'
import './product.css'
import {useState} from 'react'
const Product = ({product, cardItems, setCardItems, isShow}) =>{
   let productItem = cardItems.find((item)=>item.id === product.id)
   const [card,setCard] = useState(false)

   const addCardItems = () =>{
          
          if(!productItem && !card){
            let item = {
               id:product.id,
               name:product.name,
               price:product.price,
               initial:product.initial,
               quantity:1,
               card:card
            }
            setCard(!card)
            setCardItems([...cardItems,item])
          }else{
            setCardItems(cardItems.filter((item)=>item.id !== product.id))
            setCard(!card)

          }
   }

 return(
    <div className='product'>
      <h1>{product.quantity}</h1>
  <div className="inner">
   <div className="image">
      <img src={product.src} alt="" />
   </div>
   <div className="contents">
      <p className="head">{product.name}</p>
      <div className="icons">
         <div className="p">
            <p className="original">$ {product.price}</p>
            <p className="underlined">$2000</p>
         </div>
         <div className={ card ? "icon ac" : "icon im"} onClick={(e)=>addCardItems()}>
         <i class="fa-solid fa-bag-shopping ic"></i>
         </div>
      </div>
   </div>

  </div>

    </div>
 )
}

export default Product;