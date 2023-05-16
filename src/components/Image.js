import React from "react"

export default function Image({className, img}) {

    

    return (
        <div className={`${className} image-container`}>
            <img alt='img' src={img.url} className="image-grid"/>
        </div>
    )
}

