import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {//  {children} is destructuring of props
    const [allPhotos, setAllPhotos] = useState([])
    //const [staredPhotos, setStaredPhotos] = useState(() => JSON.parse(localStorage.getItem("staredPhotos")) || [])
    
    //const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    const url = "https://raw.githubusercontent.com/Qinisfighting/picpick/master/src/photosDataRandom.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    
   // useEffect(() => {
       // localStorage.setItem("staredPhotos", JSON.stringify(staredPhotos))
 // }, [staredPhotos])


    function toggleFav(id) {
        const updatedArr = allPhotos.map(photo => {
         return id===photo.id?
                {...photo,
                isFavorite: !photo.isFavorite }
                :photo
        })
        
        setAllPhotos(updatedArr)
        //setStaredPhotos(prevPhotos => [...prevPhotos, updatedArr[id]])
        //console.log(staredPhotos)
    }
 
    return (
        <Context.Provider value={{allPhotos, toggleFav}}> {/* shorthand for allPhotos:allPhotos */}
            {children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context}