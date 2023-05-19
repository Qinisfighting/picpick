import headerPic from '../assets/headerPic.png'
import {useState, useContext} from 'react'
import cart from '../assets/cart.png'
import {Context} from "../Context"
import {Link} from "react-router-dom"



export default function Header() {  
   
    const [isHover, setIsHover] = useState(false); //set the shopping cart icon to hover
    const {setIsRandom} = useContext(Context)
    const handleMouseEnter = () => {
        setIsHover(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
     };

     const cartStyle = {
        float: 'right',   
        margin:'.3vw 4vw',  
        width:60,  
        paddingTop: 0, 
        filter: isHover ? 'brightness(100%)' : 'brightness(60%)'
     }

    

    return (
        <header>
            <div className='head'>
                <img src={headerPic} alt='logo' />
                <h1 style={{paddingTop: 27}} onClick={() => setIsRandom(true)}><Link to='/'>PιƈPιƈƙ</Link></h1>
               
            </div>
            <div>
             
             
             <Link to='/cart'><img  style={cartStyle} src={cart} alt='cart' onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} /></Link>
           </div>
        </header>
    )

}