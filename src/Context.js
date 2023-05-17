import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {//  {children} is destructuring of props
    const [allPhotos, setAllPhotos] = useState([])
    
    //const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    const url = "https://raw.githubusercontent.com/Qinisfighting/picpick/master/src/photosData.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFav(id) {
        const updatedArr = allPhotos.map(photo => {
         return id===photo.id?
                {...photo,
                isFavorite: !photo.isFavorite }
                :photo
        })
        
        setAllPhotos(updatedArr)
    }
 
    return (
        <Context.Provider value={{allPhotos, toggleFav}}> {/* shorthand for allPhotos:allPhotos */}
            {children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context}