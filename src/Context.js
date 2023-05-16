import React, {useState, useEffect} from 'react'
import photos from './photos'
const Context = React.createContext()

function ContextProvider({children}) {//  {children} is destructuring of props
    const [allPhotos, setAllPhotos] = useState([])
    
    useEffect(() => {
        const data = {photos}  
        setAllPhotos(data)

        // Get the data from the api
        // save the data t
    }, [])
    console.log(allPhotos)
    return (
        <Context.Provider value={{allPhotos}}> {/* shorthand for allPhotos:allPhotos */}
            {children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context}