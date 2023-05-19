import Image from "../components/Image"
import React, {useContext} from "react"
import {Context} from "../Context"
import {Link} from "react-router-dom"

export default function Photos() {

    const {localPhotos, setPhotoRandom} = useContext(Context)
    
    function getClass(i) {
        if (i % 5 === 0) {
            return 'big';
        }
        else if (i % 6 === 0) {
            return 'wide' 
        }

    }
   
    const imageElements = localPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />  
    ))

    const randomBTN ={
        
        float: 'left', 
        width:110,
        height: 25,
        cursor: 'pointer',
        borderStyle: 'none',
        boxShadow: '1px 1px 2px black',
        borderRadius: 50, 
        backgroundColor:'rgba(118, 100, 134, 0.842)', 
        color:'white', 
        fontSize:'.9em',
        fontWeight:700,  
        margin: '20px 0 10px 21vw',    
     }
  
    return (
        <>
         <Link to='/random'><button onClick={() => setPhotoRandom()} style={randomBTN}>Scroll Only</button></Link>
         <main className="photos">      
            {imageElements}
         </main>
        </>
    )
}