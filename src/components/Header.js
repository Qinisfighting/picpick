import headerPic from '../assets/headerPic.png'
import {useState} from 'react'
import cart from '../assets/cart.png'
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
        marginRight:50,
        width:60,  
        paddingTop: 0, 
        filter: isHover ? 'brightness(80%)' : 'brightness(60%)'
     }

    return (
        <header>
            <div className='head'>
                <img src={headerPic} alt='logo' />
                <h1 style={{paddingTop: 27}}><Link to='/'>PιƈPιƈƙ</Link></h1>
            </div>
            <Link to='/cart'><img  style={cartStyle} src={cart} alt='cart' onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} /></Link>
           
        </header>
    )

}