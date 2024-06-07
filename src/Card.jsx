import React from "react";
import './card.css'
import CardItem from "./CardItem.jsx"
const Card = ({cardItems, setCardItems}) => {
   console.log(cardItems)
   console.log("HI")

  return (
    <div className="card">
      <div className="products-list">
        <div className="product-items-list">
            {cardItems.map((cardItem)=>(
                <CardItem key={cardItem.id} cardItem={cardItem}/>
            ))}
        </div>
        <hr style={{"borderTop": "dotted 1px", "background":"transparent" }} />
        <div class="total">
            <p>Sub-Total</p>
            <p>$10,500.00</p>
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