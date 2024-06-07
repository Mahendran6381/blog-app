import react from 'react'

const CardItem = ({cardItem}) =>{
    console.log(cardItem)
    console.log("Hol")
      return(
        <div  className="product-item">
        <p className="product-name">{cardItem.name}</p>
            <div className="price pr">
            <i class="fa-solid fa-plus"></i>
            <p className="product-price">{cardItem.quantity}</p>
            <i class="fa-solid fa-minus"></i>
            </div>
            <div className="ending-price pr">
                <p>${cardItem.price *cardItem.quantity }</p>
                <i class="fa-solid fa-xmark"></i>
            </div>
            </div>
      )
}

export default CardItem;