import '../App.css';
import React, {useState,useContext} from "react"
import {Context} from "../Context"
import PropTypes from 'prop-types';
import trash_bin from '../assets/trash_bin.png'



export default function ItemInCart({img}) {  //mean shit! forget {} for img and debugged for 2 hours...
    const [hovered, setHovered] = useState(false) 
    const [count, setCount] = useState(0);   
    const {removeFromCart} = useContext(Context)

    const handleMouseEnter = () => {
        setHovered(true);
     };
     const handleMouseLeave = () => {
        setHovered(false);
     };

     function Counter(){
       
      function handleClickMinus() {
         setCount(prev => prev - 1);
       }
       function handleClickPlus() {
         setCount(prev => prev + 1);
       }
     

      
       return (
         <div className="counter" >
           <button className="counter--minus" onClick={handleClickMinus}>
             -
           </button>
               
              <h4 className="counter--count">{count}</h4>
              
           <button className="counter--plus" onClick={handleClickPlus}>
             +
           </button>
         </div>
       );
     
     }


     const itemStyle = {
        marginLeft: 0,
        border: hovered ? '2px ridge lightgray' : '1px solid lightgray', 
        height: 'auto' ,
        width: '100%',
        borderRadius:8, 
        padding:15,
        position:'relative'
     
        
          
     }

       const imageStyle = {
        float: 'left',
        width: 80,
        height: 80,
        objectFit: 'fit',
        borderRadius: 3,
        boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.644)',    
    
     }


     const trashBinStyle = {
        float: 'right',
        width:30,
        paddingTop:30,
        cursor: 'pointer'
     }

     const priceStyle = {
        right:20,
        top:0,
        position:'absolute',
        color:'#403f3f'

     }

  return (
    <div style = {itemStyle} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} >
      
       <img alt='img' src={img.url} style={imageStyle}/>   
       
       <h4 style={priceStyle}>1,99 €</h4>
       <Counter />
       <img src={trash_bin} alt='trash_bin' style={trashBinStyle} onClick={() => removeFromCart(img.id)}></img>
   </div>  
  )

}

ItemInCart.propTypes = { 
   img: PropTypes.shape({
       id: PropTypes.string.isRequired,
       url: PropTypes.string.isRequired,
   })
}
