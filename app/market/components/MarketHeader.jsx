"use client";

import React, { useContext } from "react";
import { TextField, Stack, Badge } from "@mui/material";
import { Search, ShoppingCart } from "@mui/icons-material";
import { soleilContext } from "../cartContext";

const MarketHeader = () => {
  const { cart } = useContext(soleilContext);

  return (
    <div>
      <Stack
        direction="row"
        alignItems={"center"}
        mt="10px"
        className="bg-black-500 p-1 rounded-lg"
        spacing={2}
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
        <Badge badgeContent={cart.length} color="success">
          <ShoppingCart />
        </Badge>
      </Stack>
    </div>
  );
};

export default MarketHeader;
