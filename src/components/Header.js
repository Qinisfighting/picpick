import headerPic from '../assets/headerPic.png'
import {useState} from 'react'
import cart from '../assets/cart.png'
import reload from '../assets/reload.png'
import {Link} from "react-router-dom"



export default function Header() {  
   
    const [isHover, setIsHover] = useState(false); //set the shopping cart icon to hover
    const handleMouseEnter = () => {
        setIsHover(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
     };

     const cartStyle = {
        float: 'right', 
        marginRight:'4vw',
        marginTop:'.5vw',
        width:60,  
        paddingTop: 0, 
        filter: isHover ? 'brightness(100%)' : 'brightness(60%)'
     }

     const randomBTN ={
        float: 'left', 
        width:140,
        height: 20,
        cursor: 'pointer',
        border: '1.5px ridge white',
        borderRadius: 10, 
        backgroundColor:'beige', 
        color:'black', 
        fontSize:'.8em',
        fontWeight:700,
        marginLeft:'1vw',
        marginTop:'4.8vw',    
     }

     const reloadStyle = {
        float: 'left' ,
        marginLeft:'.5vw',
        marginTop:'4.8vw',
        width:20,  
        paddingTop: 0, 
        cursor: 'pointer',
     
     }
    return (
        <header>
            <div className='head'>
                <img src={headerPic} alt='logo' />
                <h1 style={{paddingTop: 27}}><Link to='/'>PιƈPιƈƙ</Link></h1>
               
            </div>
            <div>
             
            <Link to='/random'><button style={randomBTN}>or just random me!</button></Link>
              <img src={reload} alt='reload' style={reloadStyle} onClick={() => window.location.reload()} /> 
              <Link to='/cart'><img  style={cartStyle} src={cart} alt='cart' onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} /></Link>
           </div>
        </header>
    )

}