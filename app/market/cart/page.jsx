"use client";

import React, { useContext, useEffect, useState } from "react";
import { soleilContext } from "../cartContext";
import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import CartCard from "./CartCard";
import { CreditScoreSharp } from "@mui/icons-material";
import CartHeader from "./CartHeader";
import CheckoutConfirmation from "../CheckoutConfirmation";

const MyCart = () => {
  const { state, checkout } = useContext(soleilContext);
  const [total, setTotal] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTotal(state.cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [state.cart]);

  return (
    <div className="my-[10px] mx-[20px] relative">
      <CartHeader />
      <Stack spacing={1} marginTop={"12px"}>
        {state.cart.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </Stack>
      {state.cart.length > 0 ? (
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
            onClick={() => setOpen(true)}
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
      <CheckoutConfirmation open={open} setOpen={setOpen} />
    </div>
  );
};

export default MyCart;
