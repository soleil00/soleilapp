"use client";

import { orders } from "@/constants/orders";
import React, { createContext, useState } from "react";

export const soleilContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [orderss, setOrderss] = useState(orders);
  return (
    <soleilContext.Provider value={{ cart, orderss, setOrderss, setCart }}>
      {children}
    </soleilContext.Provider>
  );
};

export default CartContextProvider;
