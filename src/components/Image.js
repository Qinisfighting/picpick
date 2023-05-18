import React, {useState,useContext} from "react"
import {Context} from "../Context"
import star_fav from '../assets/star_fav.png'
import star_outline from '../assets/star_outline.png'
import add_to_cart from '../assets/add_to_cart.png'

export default function Image({className, img}) { 
   // const {className, img} = props  
   const [hovered, setHovered] = useState(false)
    const {toggleFav} = useContext(Context)

   const handleMouseEnter = () => {
    setHovered(true);
 };
 const handleMouseLeave = () => {
    setHovered(false);
 };

 function starIcon() {
    if(img.isFavorite) {
        return <img alt='star_fav' src={star_fav} style={starStyle} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onClick={() => toggleFav(img.id)}></img>
    }else if(hovered)  {
        return <img alt='star_fav' src={star_outline} style={starStyle}  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onClick={() => toggleFav(img.id)}></img>
    }
 }

 function cartIcon() {
    if(hovered) { 
        return <img alt='add_to_cart' src={add_to_cart} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} style={addToCartStyle}></img> 
    } 
 }

 const imageStyle = {
    filter: hovered ? 'brightness(70%)' : 'brightness(100%)',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 3,
    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.644)',
    zIndex: 1,

 }

 const starStyle ={
   
    position: 'absolute',
    width:25,
    zIndex: 2,
    top:15,
    left:15,
    cursor: 'pointer' 
 }

 const addToCartStyle ={
    position: 'absolute',
    width:25,
    zIndex: 2,
    top:15,
    right:15,
    cursor: 'pointer',
 

    
 }

    return (
        <div className={`${className} image-container`}>
            {starIcon()}  
            <a href={img.url}><img alt='img' src={img.url} style={imageStyle} className="image-grid" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} /></a>
            {cartIcon()}     
        </div>
    )
}

