import ImageRandom from "../components/ImageRandom"
import React, {useContext} from "react"
import {Context} from "../Context"
import reload from '../assets/reload.png'
import {Link} from "react-router-dom"

export default function PhotoRandom() {

    const {setPhotoRandom, allPhotoRandom} = useContext(Context)

    const reloadStyle = {
        float: 'right',
        margin:'10px 0 0 1vw ',  
        width:23,  
        cursor: 'pointer',
     
     }
    
     const randomBTN ={   
        width:70,
        height: 25,
        cursor: 'pointer',
        borderStyle: 'none',
        boxShadow: '1px 1px 2px black',
        borderRadius: 50, 
        backgroundColor:'rgba(118, 100, 134, 0.842)', 
        color:'white', 
        fontSize:'1em',
        fontWeight:700,  
        margin: '8px 0 0 1vw', 
        paddingTop:3.8   
     }

    function getClass(i) {
        if (i % 5 === 0) {
            return 'big';
        }
        else if (i % 6 === 0) {
            return 'wide' 
        }

    }
   
    function reloadClick(){

        
        //setIsRandom(false)
        window.location.reload()
    }

    const imageElementsRandom = allPhotoRandom.map((img, i) => (
        <ImageRandom key={img.id} img={img} className={getClass(i)} />  
    ))

  
    return (
        <>
        <div style={{ float: 'left', padding:'5px 0', marginLeft:'22vw'}}>
          <Link to='/'><button onClick={() => setPhotoRandom()} style={randomBTN}>Order</button></Link>
          <img className="reload" src={reload} alt='reload' style={reloadStyle} onClick={() => reloadClick()} /> 
        </div>
        <main className="photos">        
            {imageElementsRandom}
        </main>
        </>
    )
}