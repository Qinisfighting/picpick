import Image from "../components/Image"
import React, {useContext} from "react"
import {Context} from "../Context"


export default function Photos() {
    const {allPhotos} = useContext(Context)
    
    function getClass(i) {
        if (i % 5 === 0) {
            return 'big';
        }
        else if (i % 6 === 0) {
            return 'wide' 
        }

    }
    

   
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))

  
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}