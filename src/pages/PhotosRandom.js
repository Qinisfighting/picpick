import ImageRandom from "../components/ImageRandom"
import React, {useContext} from "react"
import {Context} from "../Context"
import reload from '../assets/reload.png'

export default function PhotoRandom() {

    const {allPhotoRandom, setIsRandom} = useContext(Context)

    const reloadStyle = {
        float:'left',
        margin:'0 47vw 10px',
        textAlign:'center',
        width:30,  
        padding: 0, 
        cursor: 'pointer',
     
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

        
        setIsRandom(false)
        window.location.reload()
    }

    const imageElementsRandom = allPhotoRandom.map((img, i) => (
        <ImageRandom key={img.id} img={img} className={getClass(i)} />  
    ))

  
    return (
        <>
        <img className="reload" src={reload} alt='reload' style={reloadStyle} onClick={() => reloadClick()} /> 
        <main className="photos">        
            {imageElementsRandom}
        </main>
        </>
    )
}