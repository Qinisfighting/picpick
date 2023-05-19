import headerPic from '../assets/headerPic.png'
import {useState, useContext} from 'react'
import cart from '../assets/cart.png'
import {Context} from "../Context"
import {Link} from "react-router-dom"



export default function Header() {  
   
    const [isHover, setIsHover] = useState(false); //set the shopping cart icon to hover
    const {isRandom, setIsRandom, setPhotoRandom} = useContext(Context)
    const handleMouseEnter = () => {
        setIsHover(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
     };

     const cartStyle = {
        float: 'right',   
        margin:'2vw 4vw',  
        width:60,  
        paddingTop: 0, 
        filter: isHover ? 'brightness(100%)' : 'brightness(60%)'
     }

     const randomBTN ={
        display: !isRandom && 'none',
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
        margin:'4.8vw 1vw 1vw',    
     }

    return (
        <header>
            <div className='head'>
                <img src={headerPic} alt='logo' />
                <h1 style={{paddingTop: 27}} onClick={() => setIsRandom(true)}><Link to='/'>PιƈPιƈƙ</Link></h1>
               
            </div>
            <div>
             
             <Link to='/random'><button onClick={() => setPhotoRandom()}style={randomBTN}>{!isRandom?'buy me!':'or just random me!'}</button></Link>
             <Link to='/cart'><img  style={cartStyle} src={cart} alt='cart' onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} /></Link>
           </div>
        </header>
    )

}