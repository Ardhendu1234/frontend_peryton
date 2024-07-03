import React, { createContext, useContext, useState } from 'react'

export const CartContext=createContext();

export const CartProvider = ({children}) => {

  const [cart,setCart]=useState([])
 
  return (
    <CartContext.Provider value={[cart,setCart]}>
        {children}
    </CartContext.Provider>
  )
}

export function useCart(){
    return useContext(CartContext)
}
