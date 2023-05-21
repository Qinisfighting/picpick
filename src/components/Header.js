import headerPic from '../assets/headerPic.png'
import {useState, useContext} from 'react'
import cart from '../assets/cart.png'
import {Context} from "../Context"
import {Link} from "react-router-dom"



export default function Header() {  
   
    const [isHover, setIsHover] = useState(false); //set the shopping cart icon to hover
    const {setIsRandom, cartItems} = useContext(Context)
    const handleMouseEnter = () => {
        setIsHover(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
     };

     const cartStyle = {
        float: 'right',   
        position:'absolute', 
        right:'4vw',
        top:'.3vh',
        width:60,  
        paddingTop: 0, 
        filter: isHover ? 'brightness(75%)' : 'brightness(60%)',
        zIndex: 0
     }

     const counterStyle = {
        float: 'right', 
        color:'white', 
        position:'absolute', 
        zIndex: 1,
        fontSize: '.8rem',
        right:'5vw',
        top:'2.2vh',
        
        
     }

    return (
        <header>
            <div className='head'>
                <img src={headerPic} alt='logo' />
                <h1 style={{paddingTop:30}} onClick={() => setIsRandom(true)}><Link to='/'>PιƈPιƈƙ</Link></h1>
               
            </div>
            <div>
             
             <div className='counter' style={counterStyle}>{cartItems.length}</div>
             <Link to='/cart'><img  style={cartStyle} src={cart} alt='cart' onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} /></Link>
           </div>
        </header>
    )

}