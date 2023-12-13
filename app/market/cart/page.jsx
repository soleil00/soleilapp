'use client'

import React, { useContext, useEffect, useState } from 'react'
import { soleilContext } from '../cartContext'
import { Paper, Stack } from '@mui/material'
import CartCard from './CartCard'

const MyCart = () => {

const {cart,setCart}=useContext(soleilContext)
const [total,setTotal]=useState(0)

  useEffect(() => {
  setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price),0))
},[cart])

  return (
    <div className="my-[10px] mx-[20px]">
      You have {cart.length} items in cart
      <div> and u will pay {total} in total</div>
      <Stack spacing={1}>
        {cart.map(product=> <CartCard key={product.id} product={product}/>)}
      </Stack>
    </div>
  )
}

export default MyCart