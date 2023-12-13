"use client";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const FeedCard = ({ source }) => {
  return (
    <Box>
      <Card sx={{ margin: "5px" }}>
        <CardMedia image={source} alt="testing" component="img" height={50} />
        <CardContent>
          <Typography
            variant="h5"
            component={"div"}
            gutterBottom
            fontSize={"small"}
          >
            Introducing Pi-Express DAO NFTs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Read More
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FeedCard;
