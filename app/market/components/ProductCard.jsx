"use client";

import { CurrencyBitcoin, VerifiedUser } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ProductCard = () => {
  return (
    <Card sx={{ height: "230px" }} spac>
      <CardMedia
        component="img"
        image="/feed2.jpeg"
        alt="product image"
        sx={{ height: "100px", width: "100%" }}
      />
      <CardContent sx={{ margin: 0 }}>
        <Typography variant="h7" fontSize={"small"}>
          34 Pi
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Product description goes here.
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={"4px"}
        >
          <Stack direction="row" alignItems={"center"}>
            <Avatar sx={{ height: "22px", width: "22px" }}>
              <CurrencyBitcoin />
            </Avatar>
            <Typography variant="body2" color="textSecondary">
              soleil00
            </Typography>
          </Stack>
          <Stack>
            <Button
              color="success"
              size="small"
              sx={{ fontSize: { xs: "7px", sm: "10px" } }}
              className="bg-gray-500 text-white"
            >
              add to cart
            </Button>
          </Stack>
        </Stack>
      </CardContent>
      {/* <CardActions sx={{ justifyContent: "center", marginTop: 0 }}>
        <Button
          variant="outlined"
          size="small"
          sx={{ fontSize: { xs: "7px", sm: "10px" } }}
        >
          add to cart
        </Button>
        <Button
          color="success"
          size="small"
          sx={{ fontSize: { xs: "7px", sm: "10px" } }}
          className="bg-gray-500 text-white"
        >
          add to cart
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default ProductCard;

{
  /* <img
        className="w-full h-48 object-cover object-center"
        src="/feed1.jpeg"
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">product name</h2>
        <p className="text-gray-700 text-sm text-base">
          product is amzing in term of responsivenes andd other
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-indigo-500">34 Pi</span>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-indigo-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div> */
}
