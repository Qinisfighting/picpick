import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
	//  {children} is destructuring of props
	const [allPhotos, setAllPhotos] = useState([]);
	//const [localPhotos, setLocalPhotos] = useState(() => JSON.parse(localStorage.getItem("localPhotos")) || [])
	const [allPhotoRandom, setAllPhotoRandom] = useState([]);
	const [isRandom, setIsRandom] = useState(true);
	const [cartItems, setCartItems] = useState(
		() => JSON.parse(localStorage.getItem("cartItems")) || []
	);
	const [buttonText, setButtonText] = useState("Place Order");
	const [count, setCount] = useState(1);   
	
    //the json is local but i put online anyway in case somebody else need it. 
	const url =
		"https://raw.githubusercontent.com/Qinisfighting/picpick/master/src/photosDataFixed.json";
	const urlRandom =
		"https://raw.githubusercontent.com/Qinisfighting/picpick/master/src/photosDataRandom.json";
	useEffect(() => {
		fetch(url) //
			.then((res) => res.json())
			.then((data) => setAllPhotos(data));
	}, []);

	useEffect(() => {
		fetch(urlRandom) //
			.then((res) => res.json())
			.then((data) => setAllPhotoRandom(data));
	}, [allPhotoRandom]);

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

/*
    tried to save favourite status locally but ended up with bugs which i couldn't fix, those who can do it, fork and help!

	useEffect(() => {
		localStorage.setItem("localPhotos", JSON.stringify(allPhotos));
	}, [allPhotos]);

*/
	function toggleFav(id) {
		const updatedArr = allPhotos.map((photo) => {
			return id === photo.id ? { ...photo, isFavorite: !photo.isFavorite } : photo;
		});

		setAllPhotos(updatedArr);
	}

 

	function setPhotoRandom(id) {
		const updatedArr = allPhotoRandom.map((photo) => {
			return id === photo.id && photo;
		});
		setAllPhotoRandom(updatedArr);
		setIsRandom(false);
	}

	function addToCart(newItem) {
		setCartItems((prevItems) => [...prevItems, newItem]);
	}

	function removeFromCart(id) {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	}

	function placeOrder() {
		setButtonText("Ordering...");
		setTimeout(() => {
			localStorage.removeItem("cartItems");
			alert("Your order is successful!");
			window.location.reload(true);
			setButtonText("Place Order");
		}, 3000);
	}


	function counter(id, quantity){

		const itemTotalPrice = quantity*1.99
		const itemTotalPriceDisplay = itemTotalPrice.toLocaleString("de-DE", {
		 style: "currency",
		 currency: "EUR"
	  });

		function addQuantity() {
			const newArr = cartItems.map((item, i) => {
				return id === item.id ? {...item, quantity: item.quantity + 1} : item;
			})
			setCartItems(newArr)
			setCount(quantity)
		}
	
		function reduceQuantity() {
			const newArr = cartItems.map((item, i) => {
				return id === item.id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item;
			})
			setCartItems(newArr)
			setCount(quantity)
		}
 
	
		const priceStyle = {
			right:20,
			top:0,
			position:'absolute',
			color:'#403f3f'
	
		 }
		
		 return (
		   <div className="counter" >
			 <button className="counter--minus" onClick={() => {reduceQuantity()}}>
			   -
			 </button>
				 
				<span className="counter--count"  >{quantity}</span>
				
			 <button className="counter--plus" onClick={() => {addQuantity()}}>
			   +
			 </button>
			 <h4 style={priceStyle}>{itemTotalPriceDisplay}</h4>
		   </div>
		 );
	   
	   }
	

	return (
		<Context.Provider
			value={{
				allPhotos,
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
				setButtonText,
				counter,
				count
			}}
		>
			{/* shorthand for allPhotos:allPhotos */}
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
