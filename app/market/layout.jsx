import React from 'react'
import MarketBottom from './components/MarketBottom'
import CartContextProvider from './cartContext'

const MarketLayout = ({children}) => {
  return (
    <CartContextProvider>
      {children}
          <MarketBottom/>
      </CartContextProvider>
  )
}

export default MarketLayout