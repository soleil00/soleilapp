"use client"

import { ArrowOutward, AssuredWorkload, AttachMoney, MoneyOffRounded, Send } from '@mui/icons-material'
import { Avatar, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Actions = () => {
  return (
      <div className='mb-4 -z-1'>
          <Paper sx={{padding:"10px"}}>
              <Stack justifyContent={"space-between"} alignItems={"center"} direction={"row"}>
                  <Stack spacing={0.3} justifyContent={"center"} alignItems={"center"}>
                      <Avatar><AssuredWorkload /></Avatar>
                      <Typography fontSize={"small"}>Deposit</Typography>
                  </Stack>
                  <Stack spacing={0.3} justifyContent={"center"} alignItems={"center"}>
                      <Avatar><ArrowOutward/></Avatar>
                      <Typography fontSize={"small"}>Send</Typography>
                  </Stack>
                  <Stack spacing={0.3} justifyContent={"center"} alignItems={"center"}>
                      <Avatar><MoneyOffRounded /></Avatar>
                      <Typography fontSize={"small"}>Withdraw</Typography>
                  </Stack>
                 
                
              </Stack>
          </Paper>
    </div>
  )
}

export default Actions