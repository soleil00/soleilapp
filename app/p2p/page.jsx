import { NavigateNext } from '@mui/icons-material'
import { Breadcrumbs } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const P2P = () => {
  return (
    <div className='m-4'>
      <Breadcrumbs separator={<NavigateNext/>} >
        
        <Link href="/">Home</Link>
        <Link href="/p2p">P2P</Link>
      
      </Breadcrumbs>
    </div>
  )
}

export default P2P