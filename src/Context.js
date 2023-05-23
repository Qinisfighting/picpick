import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {//  {children} is destructuring of props
    const [allPhotos, setAllPhotos] = useState([])
    ///const [localPhotos, setLocalPhotos] = useState(() => JSON.parse(localStorage.getItem("localPhotos")) || []) 
    const [allPhotoRandom, setAllPhotoRandom] = useState([])
    const [isRandom, setIsRandom] = useState(true)
    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || [])
    const [buttonText, setButtonText] = useState("Place Order")
    
    const url = "https://raw.githubusercontent.com/Qinisfighting/picpick/master/src/photosDataFixed.json"
    const urlRandom = "https://raw.githubusercontent.com/Qinisfighting/picpick/master/src/photosDataRandom.json"
    useEffect(() => {
        fetch(url)  //
            .then(res => res.json())
            .then(data => setAllPhotos(data))     
    }, [])

    useEffect(() => {
        fetch(urlRandom)  //
            .then(res => res.json())
            .then(data =>setAllPhotoRandom(data))
    }, [allPhotoRandom])
    
 
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}, [cartItems])

useEffect(() => {
    localStorage.setItem("localPhotos", JSON.stringify(allPhotos))  
}, [allPhotos])

    function toggleFav(id) {
        const updatedArr = allPhotos.map(photo => {
         return id===photo.id?
                {...photo,
                isFavorite: !photo.isFavorite }
                :photo
        })
          
        setAllPhotos(updatedArr)   
        
    }

    function setPhotoRandom(id){
        const updatedArr = allPhotoRandom.map(photo =>{
                       return id === photo.id && photo              
           })        
           setAllPhotoRandom(updatedArr)
           setIsRandom(false)
          
       }

       function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
       
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function placeOrder() {

        setButtonText('Ordering...')
        setTimeout(() => { 
        localStorage.removeItem("cartItems")
        window.location.reload(true)   
        alert('Your order is successful!')
        setButtonText('Place Order')
    },3000)
      }
  

    return (
        <Context.Provider value={{allPhotos,
                                  toggleFav, 
                                  allPhotoRandom, 
                                  setPhotoRandom, 
                                  isRandom, 
                                  setIsRandom, 
                                  addToCart, 
                                  cartItems,
                                  removeFromCart,
                                  placeOrder,
                                  buttonText,
                                  setButtonText
                                  }}> {/* shorthand for allPhotos:allPhotos */}
            {children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context}