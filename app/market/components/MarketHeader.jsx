"use client";

import React from "react";
import { TextField, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";

const MarketHeader = () => {
  return (
    <div>
      <Stack
        direction="row"
        alignItems={"center"}
        mt="10px"
        className="bg-black-500 p-1 rounded-lg"
      >
        <TextField
          label="Search Product"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <inputAdornment>
                <Search />
              </inputAdornment>
            ),
          }}
        />
      </Stack>
    </div>
  );
};

export default MarketHeader;
