import { Avatar, Divider, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const SidenavLink = ({nav}) => {
  return (
        <Link href={nav.href}>
            <ListItem>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    {nav.icon}
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary={nav.name} secondary={ nav?.secondary}/>
          </ListItem>
          <Divider/>
        </Link>
  )
}

export default SidenavLink