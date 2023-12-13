'use client'

import React, { createContext, useContext, useState } from 'react'


export const soleilContext=createContext()

const CartContextProvider = ({ children }) => {
    const [cart,setCart]=useState([])
  return (
      <soleilContext.Provider value={{cart,setCart}}>
          {children}
    </soleilContext.Provider>
  )
}

export default CartContextProvider