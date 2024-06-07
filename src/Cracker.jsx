import react from 'react'
import './Cracker.css'
import { useEffect } from 'react'
import Nav from './Nav'
import Card from './Card'
import image from "./assets/LogoFinal(1).png"
import Products from './Products'
import { useState } from 'react'
const Cracker = () =>{
    const [productItems, setProductItems] = useState([])
    const [cardItems,setCardItems] = useState([])

    useEffect(()=>{
      console.log("HI")
      const getProducts = async ()=>{
        console.log("HIiii")
        const response = await fetch("https://6662e61862966e20ef0a813f.mockapi.io/products/products")
        const data = await response.json()
        console.log(data)
        setProductItems(data)
      }
      getProducts();
    },[])
    useEffect(()=>{
       let newProductArr = [...productItems]
       for(let i =0; i<cardItems.length; i++){
         let iteeme = cardItems[i]
         let index = newProductArr.findIndex((item)=>item.id === cardItems[i].id)
         newProductArr[index].quantity = iteeme.quantity
         newProductArr[index].card = iteeme.crad
       }
       setProductItems(newProductArr)
   },[cardItems])
 
    return(
        <div className="main">
            <div className = "img">
                <img src={image} alt="Logo" />
                <Card cardItems={cardItems} setCardItems={setCardItems} productItems = {productItems} setProductItems={setProductItems} />
            </div>
            <div className = "text">
                <Nav/>
      <Products productItems = {productItems} setProductItems={setProductItems} cardItems={cardItems} setCardItems={setCardItems}/>
            </div>
        </div>
    )
}
export default Cracker;