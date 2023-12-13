'use client'

import HomeControl from '@/components/HomeControl'
import { marketnav } from '@/constants/marketnav'
import { BottomNavigation, BottomNavigationAction, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import BottomLink from './BottomLink'

const MarketBottom = () => {
  const [value,setValue]=useState(0)

  const handleChange=(event,newValue)=>{
    setValue(newValue)
  }

  return (
    <>
    <BottomNavigation className='max-w-screen-sm w-full mx-auto rounded-full' sx={{position:"fixed",bottom:10}} showLabels value={value} onChange={handleChange}>
      {marketnav.map(nav => (
        <BottomLink nav={nav} key={nav.name}/>
        ))}
          
      </BottomNavigation>
      <HomeControl/>
        </>
  )
}

export default MarketBottom