import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {//  {children} is destructuring of props
    const [allPhotos, setAllPhotos] = useState([])
    const [localPhotos, setLocalPhotos] = useState(() => JSON.parse(localStorage.getItem("localPhotos")) || []) 
    
    const url = "https://raw.githubusercontent.com/Qinisfighting/picpick/master/src/photosDataFixed.json"
    //const url = "https://raw.githubusercontent.com/Qinisfighting/picpick/master/src/photosDataRandom.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    
   useEffect(() => {
        localStorage.setItem("localPhotos", JSON.stringify(localPhotos))
  }, [localPhotos])


    function toggleFav(id) {
        const updatedArr = localPhotos.map(photo => {
         return id===photo.id?
                {...photo,
                isFavorite: !photo.isFavorite }
                :photo
        })
        

        setAllPhotos(updatedArr)
        setLocalPhotos(updatedArr)
       
    }
 
    return (
        <Context.Provider value={{allPhotos, toggleFav, localPhotos}}> {/* shorthand for allPhotos:allPhotos */}
            {children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context}