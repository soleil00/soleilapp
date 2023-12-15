"use client";

import { orders } from "@/constants/orders";
import React, { createContext, useReducer, useState } from "react";

export const soleilContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "checkout":
      return { ...state, orders: [...state.orders, ...state.cart], cart: [] };

    case "singleCheckout":
      return { ...state, orders: [...state.orders, action.payload] };

    case "addToCart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "removeFromCart":
      return {
        ...state,
        cart: state.cart.filter((pro) => pro.id !== action.payload),
      };

    default:
      return;
  }
};

const initialState = {
  cart: [],
  orders: [],
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "addToCart", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "removeFromCart", payload: productId });
  };

  const checkout = () => {
    dispatch({ type: "checkout" });
  };

  const singleCheckout = (product) => {
    dispatch({ type: "singleCheckout", payload: product });
  };

  const [orderss, setOrderss] = useState(orders);
  return (
    <soleilContext.Provider
      value={{ state, addToCart, removeFromCart, checkout, singleCheckout }}
    >
      {children}
    </soleilContext.Provider>
  );
};

export default CartContextProvider;
