import React from "react";
import './card.css'
import { useState,useEffect } from "react";
const Card = ({cardItems, setCardItems, productItems, setProductItems}) => {
   const [total,setTotal] = useState(0)
   useEffect(()=>{
    let sum = 0
    cardItems.map((item)=>(
      sum += item.price
    ))
    setTotal(sum)
   })
  
  const addQuantity = (cardItem) =>{
    let index = cardItems.findIndex(item=>item.id === cardItem.id)
    cardItem.quantity +=1
    cardItem.price = cardItem.initial * cardItem.quantity
    let newItems = [...cardItems]
    newItems[index] = cardItem
    setCardItems(newItems)
}
const decreaseQuantity = (cardItem) =>{

  let index = cardItems.findIndex(item=>item.id === cardItem.id)
  cardItem.quantity -=1
  cardItem.price -=(cardItem.initial)
  let newItems = [...cardItems]
  newItems[index] = cardItem
  setCardItems(newItems)
}

const removeItem = (cardItem) =>{
  let index = productItems.findIndex(item=>item.id === cardItem.id)
  console.log(cardItem)
  console.log()
  let newItems = [...productItems]
  newItems[index].card = true
  newItems[index].quantity = 0
  setProductItems(newItems)
  setCardItems(cardItems.filter((item)=>item.id !== cardItem.id))

}
  return (
    <div className="card">
      <div className="products-list">
        <div className="product-items-list">
            {cardItems.map((cardItem)=>(
                <div  className="product-item">
                <p className="product-name">{cardItem.name}</p>
                    <div className="price pr">
                    <i class="fa-solid fa-plus" onClick={(e)=>addQuantity(cardItem)}></i>
                    <p className="product-price">{cardItem.quantity}</p>
                    <i class="fa-solid fa-minus" onClick={(e)=>decreaseQuantity(cardItem)}></i>
                    </div>
                    <div className="ending-price pr">
                        <p>${cardItem.price }</p>
                        <i class="fa-solid fa-xmark" onClick={(e)=>removeItem(cardItem)}></i>
                    </div>
                    </div>
            ))}
        </div>
        <hr style={{"borderTop": "dotted 1px", "background":"transparent" }} />
        <div class="total">
            <p>Sub-Total</p>
            <p>{total}</p>
        </div>
        <hr style={{"borderTops": "dotted 1px", "background":"transparent" }} />

        <div className="submit-payment">
            <p>Minimum Order Amount Must Be Greater Than For Tamilnad</p>
            <div>
                <button>Checkout</button>
            </div>
        </div>
        <div className="guidelines">
            PAYMENT GUIDELINES: Kindly select your convenient payment option and go to the payment mode directly 
        </div>
      </div>
    </div>
  );
};

export default Card