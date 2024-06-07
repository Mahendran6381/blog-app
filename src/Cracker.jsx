import react from 'react'
import './Cracker.css'
import Nav from './Nav'
import Card from './Card'
import image from "./assets/LogoFinal(1).png"
import Products from './Products'
import { useState } from 'react'
const Cracker = () =>{
    const products = [
        {
        id:1,
        name:"Red Bijili 50",
        price:500,
        src:"https://bijili.s3.ap-south-1.amazonaws.com/product/bij_221-1686135598.jpg"
      },
      {
        id:2,
        name:"Top Gun",
        price:200,
        src:"https://bijili.s3.ap-south-1.amazonaws.com/product/bij_089.jpg"
      },
      {
        id:3,
        name:"Magical Star Peacock",
        price:300,
        src:"https://bijili.s3.ap-south-1.amazonaws.com/product/bij_100.jpg"
      },
      {
        id:4,
        name:"Shower Gun",
        price:1000,
        src:"https://bijili.s3.ap-south-1.amazonaws.com/product/bij_171.jpg"
      },
    ]

    const [productItems, setProductItems] = useState(products)
    const [cardItems,setCardItems] = useState([])
    return(
        <div className="main">
            <div className = "img">
                <img src={image} alt="Logo" />
                <Card cardItems={cardItems} setCardItems={setCardItems} />
            </div>
            <div className = "text">
                <Nav/>
      <Products productItems = {productItems} cardItems={cardItems} setCardItems={setCardItems}/>
            </div>
        </div>
    )
}
export default Cracker;