"use client";

import React from "react";
import FeedCard from "./shared/FeedCard";
import { Grid, Typography } from "@mui/material";

const orgins = ["/feed1.jpeg", "feed2.jpeg", "feed3.jpeg"];

const HomeFeed = () => {
  return (
    <div className="mb-4">
      <Typography>Latest Announcements</Typography>

      <Grid container>
        {orgins.map((source) => (
          <Grid xs={6} sm={4} key={source}>
            <FeedCard source={source} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomeFeed;
