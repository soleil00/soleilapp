"use client"

import { Button, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const CartCard = ({product}) => {
    const [qty,setQty]=useState(1)

    const inc = () => {
        setQty(state=>state+1)
    }
    const dec = () => {
        setQty(state=>state-1)
    }

  return (
    <Paper>
        <Stack p={1} direction={"row"} spacing={2} justifyContent={"space-between"} alignItems={"center"}>
              <img src={product?.image} alt='img' width="80px" className="rounded-lg"/>
              <Stack >
                  <Typography color="blue" variant="h5" fontSize="small" component="div">{product?.name }</Typography>
                  <Typography variant="h6" color="gray" fontSize="small" component="div">{product?.description }</Typography>
                  <Typography color="green">{product?.price*qty} PI</Typography>
              </Stack>
              <Stack spacing={1}>
                  <Button size='small' sx={{width:"20px",height:"20px"}} onClick={inc} variant='outlined' color='primary'>+</Button>
                  <Button size='small' sx={{ width: "20px", height: "20px" }} variant='outlined' color='primary'>{ qty}</Button>
                  <Button  size='small' disabled={qty<2} sx={{width:"20px",height:"20px"}} onClick={dec} variant='outlined' color='primary'>-</Button>
              </Stack>
        </Stack>
      </Paper>
  )
}

export default CartCard