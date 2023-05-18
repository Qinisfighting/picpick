import React, {useState} from "react"



export default function ImageRamdon({className, img}) { 

   const [hovered, setHovered] = useState(false)
   //const {allPhotoRamdon} = useContext(Context)


   const handleMouseEnter = () => {
    setHovered(true);
 };
 const handleMouseLeave = () => {
    setHovered(false);
 };

 const imageStyle = {
    filter: hovered ? 'brightness(70%)' : 'brightness(100%)',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 3,
    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.644)',
    zIndex: 1,

 }

    return (
        <div className={`${className} image-container`}>
         
            <a href={img.url}><img alt='img' src={img.url} style={imageStyle} className="image-grid" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} /></a>
          
        </div>
    )
}
