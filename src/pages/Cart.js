import React, {useState,useContext} from "react"
import ItemInCart from "../components/ItemInCart"
import {Context} from "../Context"





export default function Cart(img) {
    const {cartItems} = useContext(Context)
    
    const cartElements = cartItems.map(img => (
        <ItemInCart key={img.id} img={img} url={img.url} className='itemInCart' />  
    ))
     const cartElementsStyle ={
      display: 'flex',
      flexDirection:'column',
      margin:0,
      paddingLeft: '7vw',
      position:'relative',
      marginBottom: 100 
    
     }

    

     const summerStyle ={
        color:'#403f3f',
        position:'absolute',
        right: '8vw',
        bottom: -50,
        paddingTop: '100px 0',
       


     }
    return (
        <main className="cart-page" style={cartElementsStyle}>   
            {cartElements}
            <h2 style={summerStyle}>Summe ({cartItems.length}): {cartItems.length*1.99} €</h2>
        </main>
    )
}

