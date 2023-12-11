'use client'

import { AttachMoney, Chat, Home, MonetizationOn, MoneyOffCsred, MoneyTwoTone, School, Wallet } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const BottomNav = () => {
  return (
      <Stack 
          className=' max-w-screen-sm w-full mx-auto'
            justifyContent={"space-between"} 
            alignItems={"center"} 
            direction="row" 
          bgcolor={"yellowgreen"}
          sx={{ padding: "10px",position:'fixed',bottom:0 ,marginTop:"500px"}}>
          <Link href="/">
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Home />
                <Typography fontSize="small">Home</Typography>
              </Stack>
          </Link>
          <Link href="/wallet">
          <Stack justifyContent={"center"} alignItems={"center"}>
              <AttachMoney />
              <Typography fontSize="small">wallet</Typography>
          </Stack></Link>
          <Link href='/chat'>
          <Stack justifyContent={"center"} alignItems={"center"}>
              <Chat />
              <Typography fontSize="small">Chat</Typography>
          </Stack></Link>
          <Link href="learn">
              <Stack justifyContent={"center"} alignItems={"center"}>
              <School />
              <Typography fontSize="small">Learn</Typography>
          </Stack>
          </Link>
    </Stack>
  )
}

export default BottomNav