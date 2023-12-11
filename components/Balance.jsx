"use client"
import { Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Balance = () => {
  return (
      <div className='mb-4 '>
          <Paper elevation={0.3} sx={{padding:"20px"}}>
              <Stack spacing={2}>
                  <Typography variant='h7' component={"div"} fontSize={"small"}>
                  Your Pi Balance
                  </Typography>
                  <Typography variant='h4' component={"div"}>
                  455 $PI
                  </Typography>
                  <Divider />
                   <Typography fontSize="small">
                  Refer your friend and earn 10Pi today
                  </Typography>
              </Stack>
         </Paper>
      </div>
  )
}

export default Balance