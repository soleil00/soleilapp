"use client";

import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { KeyboardArrowRight } from "@mui/icons-material";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-500">
      <Paper className="bg-purple-300 relative h-[150px] text-center">
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <img src="/feed1.jpeg" />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="Soleil00" secondary="srukundo01@gmail.com" />
        </ListItem>

        <div className="absolute w-[80%] left-1/2 transform -bottom-5 -translate-x-1/2">
          <Paper className="flex justify-between items-center p-3">
            <Link href="/market/orders">My Orders</Link>
            <Link href="/market/orders">My Shop</Link>
            <Link href="/market/orders">Orders</Link>
          </Paper>
        </div>
      </Paper>
      <Stack m="25px 10px">
        <Accordion elevation={0.1}>
          <AccordionSummary expandIcon={<KeyboardArrowRight />}>
            Profile
          </AccordionSummary>
          <AccordionDetails>some details her</AccordionDetails>
        </Accordion>
        <Accordion elevation={0.1}>
          <AccordionSummary expandIcon={<KeyboardArrowRight />}>
            Email
          </AccordionSummary>
          <AccordionDetails>
            <TextField label="Email" value="soleil rukundo" size="small" />
            <TextField label="Email" size="small" />
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0.1}>
          <AccordionSummary expandIcon={<KeyboardArrowRight />}>
            Currency
          </AccordionSummary>
          <AccordionDetails>some details her</AccordionDetails>
        </Accordion>
        <Accordion elevation={0.1}>
          <AccordionSummary expandIcon={<KeyboardArrowRight />}>
            Language
          </AccordionSummary>
          <AccordionDetails>some details her</AccordionDetails>
        </Accordion>
        <Accordion elevation={0.1}>
          <AccordionSummary expandIcon={<KeyboardArrowRight />}>
            Country
          </AccordionSummary>
          <AccordionDetails>
            <TextField select label="select country" fullWidth>
              <MenuItem>rw</MenuItem>
              <MenuItem>er</MenuItem>
              <MenuItem>rs</MenuItem>
              <MenuItem>chn</MenuItem>
              <MenuItem>tz</MenuItem>
              <MenuItem>usa</MenuItem>
            </TextField>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </div>
  );
};

export default ProfilePage;
