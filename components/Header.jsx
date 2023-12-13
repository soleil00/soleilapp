"use client";

import { sidenav } from "@/constants/sidenav";
import {
  AccountBalance,
  Api,
  CardMembership,
  Chat,
  CurrencyExchange,
  Extension,
  Group,
  HelpCenter,
  LogoDev,
  Logout,
  LogoutOutlined,
  MenuOutlined,
  Rule,
  ShoppingBag,
  Subscriptions,
  Support,
  Timeline,
  VerifiedUser,
} from "@mui/icons-material";
import {
  Avatar,
  Drawer,
  Stack,
  Box,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  Button,
  ListItemIcon,
  ListItemAvatar,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import SidenavLink from "./shared/SidenavLink";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack
      sx={{ zIndex: 1 }}
      className="fixed top-0 md:left-0 md:right-0 p-2 right-0 left-0 bg-blue-400"
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack
        spacing={1}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <MenuOutlined
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        />
        <Typography sx={{ display: { xs: "none", md: "block" } }}>
          SoleilApp
        </Typography>
      </Stack>
      <Avatar>RS</Avatar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        className="w-100 p-10"
      >
        <Box width={"240px"} role="presentation">
          <Typography p={"30px"}>
            {" "}
            <LogoDev /> SoleilApp
          </Typography>
          <Divider />
          <List>
            {sidenav.map((nav) => (
              <SidenavLink key={nav.name} nav={nav} />
            ))}
          </List>
          <Button
            className="text-center fixed bottom-2 left-10"
            variant="outlined"
            color="error"
            size="medium"
            startIcon={<Logout />}
          >
            sign out
          </Button>
        </Box>
      </Drawer>
    </Stack>
  );
};

export default Header;
