import React, {useState, useEffect} from "react"
import star_fav from '../assets/star_fav.png'
import star_outline from '../assets/star_outline.png'
import add_to_cart from '../assets/add_to_cart.png'

export default function Image({className, img}) { 
   // const {className, img} = props  
   const [hovered, setHovered] = useState(false)
   const [isFav, setIsFav] =  useState(false)

   const handleMouseEnter = () => {
    setHovered(true);
 };
 const handleMouseLeave = () => {
    setHovered(false);
 };
 const toggle = () => {
    setIsFav(prevState => !prevState)
 }
 const imageStyle = {
    filter: hovered ? 'brightness(70%)' : 'brightness(100%)',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 3,
    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.644)',
    zIndex: 1

 }

 const starStyle ={
    position: 'absolute',
    width:18,
    zIndex: 2,
    top:15,
    left:15,
    cursor: 'pointer'  
    
 }

 const addToCartStyle ={
    position: 'absolute',
    width:20,
    zIndex: 2,
    top:15,
    right:15,
    cursor: 'pointer' 
    
 }

    return (
        <div className={`${className} image-container`}>
            <img alt='star_fav' src={isFav?star_fav:star_outline} onClick={toggle} style={starStyle}></img>
            <img alt='img' src={img.url} style={imageStyle} className="image-grid" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}/>
            <img alt='add_to_cart' src={add_to_cart} onClick={toggle} style={addToCartStyle}></img>
        </div>
    )
}

