import React, {useContext} from "react"
import ItemInCart from "../components/ItemInCart"
import {Context} from "../Context"





export default function Cart(img) {
    
    const {cartItems, placeOrder, buttonText, isCartEmpty} = useContext(Context)
    
    const cartElements = cartItems.map(img => (
        <ItemInCart key={img.id} img={img} url={img.url} className='itemInCart' />  
    ))


     const cartElementsStyle ={
      display: 'flex',
      flexDirection:'column',
      marginBottom:120,
      paddingLeft: '7vw',
      position:'relative',
    
     }

     const summerStyle = {
        color:'#403f3f',
        position:'absolute',
        right: '8vw',
        bottom: -50,
        padding: 0,
     }

    const buttonStyle = {
        display: isCartEmpty && 'none',
        position:'absolute',
        width:110,
        height: 35,
        cursor: 'pointer',
        borderStyle: 'none',
        boxShadow: '1px 1px 2px black',
        borderRadius: 50, 
        backgroundColor:'rgba(118, 100, 134, 0.842)', 
        color:'white', 
        fontSize:'.9em',
        fontWeight:700,  
        bottom: -80,
        right: '8vw',
       
     }
     
     const totalCost = cartItems.length*1.99
     const totalCostDisplay = totalCost.toLocaleString("de-DE", {style: "currency", currency: "EUR"})
     const ItemsNumber = cartItems.length
     
    return (
        <main className="cart-page" style={cartElementsStyle}>   
            {cartElements}
            {!isCartEmpty ? 
            <h2 style={summerStyle}>Total({ItemsNumber}):  {totalCostDisplay}</h2>
            : <h2>You have no items in your cart. </h2> }
            <button style={buttonStyle}  onClick={() => {placeOrder()}}>{buttonText}</button>
        </main>
    )
}
