import react from 'react'
import { useState, useEffect } from 'react'

const CardItem = ({invCardItem,cardItems,setCardItems}) =>{
  console.log(invCardItem)
  useEffect(()=>{
    console.log("HI")
    console.log(cardItem)
    setCardItem(invCardItem)
    console.log(cardItem)
    console.log("Hoi")
  },[cardItem])
 
      return(
        <div  className="product-item">
        <p className="product-name">{cardItem.name}</p>
            <div className="price pr">
            <i class="fa-solid fa-plus" onClick={(e)=>addQuantity()}></i>
            <p className="product-price">{cardItem.quantity}</p>
            <i class="fa-solid fa-minus" onClick={(e)=>decreaseQuantity()}></i>
            </div>
            <div className="ending-price pr">
                <p>${cardItem.price *cardItem.quantity }</p>
                <i class="fa-solid fa-xmark"></i>
            </div>
            </div>
      )
}

export default CardItem;