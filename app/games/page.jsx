import { NavigateNext } from '@mui/icons-material'
import { Breadcrumbs } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Games = () => {
  return (
    <div className='m-4'>
      <Breadcrumbs separator={<NavigateNext/>} >
        
        <Link href="/">Home</Link>
        <Link href="/games">Games</Link>
      
      </Breadcrumbs>
    </div>
  )
}

export default Games