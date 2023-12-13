"use client";

import { ShoppingCart } from "@mui/icons-material";
import { Card, Stack, Typography } from "@mui/material";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      {service.icon}
      <Typography fontSize={"13px"}>{service.name}</Typography>
    </Stack>
  );
};

export default ServiceCard;
