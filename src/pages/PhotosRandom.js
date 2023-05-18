import ImageRandom from "../components/ImageRandom"
import React, {useContext} from "react"
import {Context} from "../Context"


export default function PhotoRandom() {

    const {allPhotoRandom} = useContext(Context)
    
    function getClass(i) {
        if (i % 5 === 0) {
            return 'big';
        }
        else if (i % 6 === 0) {
            return 'wide' 
        }

    }
   
    const imageElementsRandom = allPhotoRandom.map((img, i) => (
        <ImageRandom key={img.id} img={img} className={getClass(i)} />  
    ))

  
    return (
        <main className="photos">
            {imageElementsRandom}
        </main>
    )
}