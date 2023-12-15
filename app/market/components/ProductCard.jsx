"use client";

import {
  CurrencyBitcoin,
  ShoppingBag,
  ShoppingCart,
  VerifiedUser,
} from "@mui/icons-material";
import {
  Button,
  Typography,
  Paper,
  Stack,
  Alert,
  Snackbar,
  AlertTitle,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, forwardRef, useState } from "react";
import { soleilContext } from "../cartContext";

const SnackbarAlert = forwardRef((props, ref) => {
  return <Alert elevation={5} ref={ref} {...props} />;
});

const ProductCard = ({ product }) => {
  const { state, addToCart, removeFromCart } = useContext(soleilContext);

  const [exist, setExist] = useState(false);

  const handleAddToCart = () => {
    if (state.orders.includes(product)) {
      setExist(true);
    } else addToCart(product);
  };

  return (
    <Paper sx={{ borderRadius: "16px" }} className="relative pb-1">
      <Link href={`market/product/${product.id}`}>
        <Image
          src={product?.image}
          alt="image here"
          width={100}
          className="w-full h-[150px]"
          height={130}
          style={{ borderTopLeftRadius: "16px" }}
        />
        <Typography variant="h6" fontSize="small" component={"div"} p="5px">
          {product?.name}
        </Typography>
      </Link>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="m-2"
      >
        <Typography fontSize={"small"} sx={{ color: "red" }}>
          {product?.price} Pi
        </Typography>
        {state.cart.includes(product) ? (
          <Button
            size="small"
            variant="outlined"
            onClick={() => removeFromCart(product.id)}
            color="warning"
            sx={{ fontSize: "10px", borderRadius: "8px" }}
            endIcon={<ShoppingCart />}
          >
            Remove from
          </Button>
        ) : (
          <Button
            size="small"
            onClick={handleAddToCart}
            variant="outlined"
            color="success"
            sx={{ fontSize: "10px", borderRadius: "8px" }}
            endIcon={<ShoppingCart />}
          >
            add to
          </Button>
        )}
      </Stack>

      <Typography
        fontSize={"small"}
        className="bg-blue-400 px-2 py-1 rounded-full w-[90px] text-center absolute top-0 left-0"
      >
        {product?.stock} in Stock
      </Typography>

      <Snackbar
        autoHideDuration={4000}
        open={exist}
        onClose={() => setExist(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <SnackbarAlert severity="error" onClose={() => setExist(false)}>
          <AlertTitle>Product not added to Your Cart</AlertTitle>
          This product already exist in your orders and seller has not marked it
          as approved
        </SnackbarAlert>
      </Snackbar>
    </Paper>
  );
};

export default ProductCard;
