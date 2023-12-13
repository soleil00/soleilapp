"use client";

import React from "react";
import ServiceCard from "./shared/ServiceCard";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { services } from "@/constants/services";
import Link from "next/link";

const Services = () => {
  return (
    <Box className="mb-4">
      <Typography marginBottom={"10px"}>Products</Typography>

      <Paper sx={{ paddingBottom: "10px", paddingTop: "10px" }}>
        <Link href="/fireside">fireside</Link>
        <Grid container spacing={1}>
          {services.map((service) => (
            <Grid item xs={3} sm={3} key={service.name}>
              <Link href={service.href}>
                <ServiceCard service={service} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Services;
