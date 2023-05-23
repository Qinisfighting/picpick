import React, {useContext} from "react"
import ItemInCart from "../components/ItemInCart"
import {Context} from "../Context"





export default function Cart(img) {
    
    const {cartItems, placeOrder, buttonText} = useContext(Context)
    
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

     
    return (
        <main className="cart-page" style={cartElementsStyle}>   
            {cartElements}
            <h2 style={summerStyle}>Summe({cartItems.length}): {(cartItems.length*1.99).toLocaleString("de-DE", {style: "currency", currency: "EUR"})}</h2>
            <button style={buttonStyle}  onClick={() => {placeOrder()}}>{buttonText}</button>
        </main>
    )
}
