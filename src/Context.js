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
    
    //console.log(allPhotos)
    
    return (
        <Context.Provider value={{allPhotos}}> {/* shorthand for allPhotos:allPhotos */}
            {children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context}