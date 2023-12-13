"use client";

import React, { useContext, useEffect, useState } from "react";
import { soleilContext } from "../cartContext";
import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import CartCard from "./CartCard";
import { CreditScoreSharp } from "@mui/icons-material";
import CartHeader from "./CartHeader";

const MyCart = () => {
  const { cart, setCart } = useContext(soleilContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className="my-[10px] mx-[20px] relative">
      <CartHeader />
      <Stack spacing={1} marginTop={"12px"}>
        {cart.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </Stack>
      {cart.length > 0 ? (
        <Paper sx={{ padding: "20px", marginTop: "20px" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography>Products</Typography>
            <Typography>{total}</Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography>Shipping Fees</Typography>
            <Typography>34 Pi</Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography>Transaction Fees</Typography>
            <Typography>3 Pi</Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography>Total</Typography>
            <Typography>320 Pi</Typography>
          </Stack>
          <Button
            variant="outlined"
            endIcon={<CreditScoreSharp />}
            sx={{ marginTop: "10px" }}
            color="success"
            fullWidth
          >
            Pay now
          </Button>
        </Paper>
      ) : (
        <>
          <img src="/emptyCart.png" />
          <Typography sx={{ textAlign: "center" }}>
            Your Cart is empty, Add some products and come back here :)
          </Typography>
        </>
      )}
    </div>
  );
};

export default MyCart;
