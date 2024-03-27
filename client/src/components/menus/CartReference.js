import {createContext, useState, useEffect} from 'react';

const CartContext = createContext();

const CartReference = ({children}) => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  if(loginConfirmation == null) {
    localStorage.setItem('loginConfirmation', JSON.stringify({login: false, userId: null}));
  }

  const [cart, setCart] = useState([]);
  
  const setCartData = (newData) => {
    setCart((prevData) => {
      if(prevData.length === 0)
        return newData;
      else{
        const updatedData = prevData.map(prevMenuItem => {
          const updatedMenuItem = newData.find((newMenuItem) => Object.keys(newMenuItem)[0] === Object.keys(prevMenuItem)[0]);
          return updatedMenuItem ? updatedMenuItem : prevMenuItem;
        });

        newData.forEach((newMenuItem) => {
          if(!prevData.find((prevMenuItem) => Object.keys(prevMenuItem)[0] === Object.keys(newMenuItem)[0]))
            updatedData.push(newMenuItem);
        });

        return updatedData;
      }
    });
  }

  useEffect(() => {
    if(cart.length != 0 && loginConfirmation.userId != null) {
      const filteredCartItems = cart.filter(item => Object.values(item)[0] !== 0);
      fetch('https://sohailshaikh-hoteldemo.cyclic.app/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([loginConfirmation.userId, filteredCartItems]),
      })
        .then(response => {
          if(response.status === 500) 
            alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
        })
        .catch(error => console.error(error));
    }
  }, [cart]);

  return (
    <>
      <CartContext.Provider value={{setCartData}}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export {CartContext, CartReference};